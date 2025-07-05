import invariant from "tiny-invariant";
import { parse, HTMLElement } from "node-html-parser";
import { Project } from "ts-morph";

fetch("https://core.telegram.org/bots/api")
  .then((r) => r.text())
  .then((apiHTML) => parse(apiHTML))
  .then((document) => {
    const project = new Project({
      compilerOptions: {
        outDir: "dist",
        declaration: true,
        emitDeclarationOnly: true,
      },
    });

    const sourceFile = project.createSourceFile("TelegramBotBindings.ts");

    sourceFile.addTypeAlias({
      name: "Integer",
      type: "number",
    });
    sourceFile.addTypeAlias({
      name: "Float",
      type: "number",
    });
    sourceFile.addTypeAlias({
      name: "String",
      type: "string",
    });
    sourceFile.addTypeAlias({
      name: "Boolean",
      type: "boolean",
    });
    sourceFile.addTypeAlias({
      name: "InputFile",
      type: "Blob",
    });
    sourceFile.addTypeAlias({
      name: "True",
      type: "true",
    });

    for (let entry of extractTypeAliases(document)) {
      sourceFile.addTypeAlias({
        name: entry.name,
        type: entry.aliases.join(" | "),
        docs: [entry.description],
      });
    }
    for (let entry of extractTypeDefinitions(document)) {
      const newInterface = sourceFile.addInterface({
        name: entry.isMethod ? entry.name + "Options" : entry.name,
        docs: entry.description,
        isExported: true,
      });

      if (entry.returnType) {
        sourceFile.addTypeAlias({
          name: entry.name + "Result",
          type: entry.returnType,
        });
      }

      console.log("Type:", entry.name);
      console.log("Description:", entry.description);
      console.log("Parameters:");
      for (let param of entry.parameters) {
        newInterface.addProperty({
          name: param.name,
          docs: [param.description],
          type: param.type,
          hasQuestionToken: param.optional,
        });
        console.log("\tName:", param.name);
        console.log("\tType:", param.type);
        console.log("\tOptional:", param.optional);
        console.log("\tDescription:", param.description);
        console.log("--");
      }
      console.log("--");
    }

    return project.emit();
  });

function extractTypeAliases(document: HTMLElement) {
  const paragraphs = [...document.querySelectorAll("p")].filter(
    (p) =>
      p.textContent.includes("Currently, it can be one of") ||
      p.textContent.includes("Currently, the following") ||
      p.textContent.includes("It can be one of") ||
      p.textContent.includes("It should be one of") ||
      p.textContent.includes(
        "Telegram clients currently support the following"
      ) ||
      p.textContent.includes(
        "Telegram clients currently support results of the following"
      ) ||
      p.textContent.includes("Currently holds no information") ||
      p.textContent.includes("currently holds no information")
  );
  const nodes = paragraphs.map((p) => {
    return {
      descriptionNode: p,
      nameNode: p.previousElementSibling,
      aliasesNode: p.nextElementSibling,
    };
  });

  return nodes.map((node) => {
    invariant(node.nameNode);
    invariant(node.descriptionNode);
    invariant(node.aliasesNode);
    const name = node.nameNode.textContent;
    const description = node.descriptionNode.textContent;
    const aliases = [...node.aliasesNode.querySelectorAll("li")].map(
      (li) => li.textContent
    );

    if (aliases.length === 0) aliases.push("Record<string, never>");
    return {
      name,
      description,
      aliases,
    };
  });
}

function extractTypeDefinitions(document: HTMLElement) {
  const tables = document.querySelectorAll("table");

  const collectedTypeDataElements: Array<HTMLElement>[] = [];

  const topLevelTags = ["H1", "H2", "H3", "H4", "H5", "H6", "H7"];

  for (let table of tables) {
    let pointer: HTMLElement | null = table;
    const previousNodes: Array<HTMLElement> = [];
    while (pointer) {
      previousNodes.push(pointer);
      if (topLevelTags.includes(pointer.tagName)) break;
      pointer = pointer.previousElementSibling;
    }

    collectedTypeDataElements.push(previousNodes.reverse());
  }

  const structuredData = collectedTypeDataElements
    .filter((entry) => entry.length >= 2)
    .map((definitionTags) => {
      const heading = definitionTags.find((t) =>
        topLevelTags.includes(t.tagName)
      );
      const paragraphs = definitionTags.filter((t) => t.tagName === "P");
      const table = definitionTags.find((t) => t.tagName === "TABLE");

      invariant(heading);
      invariant(table);

      const parameters: {
        name: string;
        type: string;
        description: string;
        optional: boolean;
      }[] = [];

      const tableRows = [...table.querySelectorAll("tr")].slice(1);

      for (const row of tableRows) {
        const cells = [...row.querySelectorAll("td")];
        const tokens = cells.map((c) => c.textContent);

        let [
          propertyName,
          propertyType,
          propertyRequired,
          propertyDescription,
        ] = tokens;
        if (!propertyDescription) {
          propertyDescription = propertyRequired;
          propertyRequired = propertyDescription?.includes("Optional")
            ? "Optional"
            : "Yes";
        }

        invariant(propertyDescription, "Missing propertyDescription");
        invariant(propertyName, "Missing propertyName");
        invariant(propertyRequired, "Missing propertyRequired");
        invariant(propertyType, "Missing propertyType");

        if (propertyType.includes("Array of")) {
          propertyType = propertyType.replaceAll("Array of", "");
          propertyType = `${propertyType}[]`;
        }

        propertyType = propertyType.replaceAll(" or ", " | ");
        propertyType = propertyType.replaceAll(" and ", " | ");
        propertyType = propertyType.replaceAll(", ", " | ");

        parameters.push({
          description: propertyDescription,
          name: propertyName,
          optional: propertyRequired === "Optional",
          type: propertyType,
        });
      }

      const name = heading.textContent;
      const isMethod = /[a-z]/.test(name[0]);

      const description = paragraphs.map((p) => p.textContent.trim());

      const allDescription = description.join(" ");

      let returnType: null | string = null;

      const returnTypeTest1 = allDescription.match(/Returns (.*) on success/);

      if (returnTypeTest1) {
        returnType = returnTypeTest1[1];
      }

      return {
        name,
        isMethod,
        description: description,
        parameters,
        returnType,
      };
    });

  return structuredData;
}

