type Integer = number;
type Int = number;
type Float = number;
type String = string;
type Boolean = boolean;
type InputFile = Blob;
type True = true;
/** This object describes a message that can be inaccessible to the bot. It can be one of */
export type MaybeInaccessibleMessage = Message | InaccessibleMessage;
/** This object describes the origin of a message. It can be one of */
export type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel;
/** This object describes paid media. Currently, it can be one of */
export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;
/** This object describes the way a background is filled based on the selected colors. Currently, it can be one of */
export type BackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient;
/** This object describes the type of a background. Currently, it can be one of */
export type BackgroundType = BackgroundTypeFill | BackgroundTypeWallpaper | BackgroundTypePattern | BackgroundTypeChatTheme;
/** This object represents a service message about a forum topic closed in the chat. Currently holds no information. */
export type ForumTopicClosed = Record<string, never>;
/** This object represents a service message about a forum topic reopened in the chat. Currently holds no information. */
export type ForumTopicReopened = Record<string, never>;
/** This object represents a service message about General forum topic hidden in the chat. Currently holds no information. */
export type GeneralForumTopicHidden = Record<string, never>;
/** This object represents a service message about General forum topic unhidden in the chat. Currently holds no information. */
export type GeneralForumTopicUnhidden = Record<string, never>;
/** This object represents a service message about a video chat started in the chat. Currently holds no information. */
export type VideoChatStarted = Record<string, never>;
/** This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported: */
export type ChatMember = ChatMemberOwner | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned;
/** Describes the type of a clickable area on a story. Currently, it can be one of */
export type StoryAreaType = StoryAreaTypeLocation | StoryAreaTypeSuggestedReaction | StoryAreaTypeLink | StoryAreaTypeWeather | StoryAreaTypeUniqueGift;
/** This object describes the type of a reaction. Currently, it can be one of */
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;
/** This object describes a gift received and owned by a user or a chat. Currently, it can be one of */
export type OwnedGift = OwnedGiftRegular | OwnedGiftUnique;
/** This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported: */
export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;
/** This object describes the bot's menu button in a private chat. It should be one of */
export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;
/** This object describes the source of a chat boost. It can be one of */
export type ChatBoostSource = ChatBoostSourcePremium | ChatBoostSourceGiftCode | ChatBoostSourceGiveaway;
/** This object represents the content of a media message to be sent. It should be one of */
export type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;
/** This object describes the paid media to be sent. Currently, it can be one of */
export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo;
/** This object describes a profile photo to set. Currently, it can be one of */
export type InputProfilePhoto = InputProfilePhotoStatic | InputProfilePhotoAnimated;
/** This object describes the content of a story to post. Currently, it can be one of */
export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;
/** This object represents one result of an inline query. Telegram clients currently support results of the following 20 types: */
export type InlineQueryResult = InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice;
/** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types: */
export type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent;
/** This object describes the state of a revenue withdrawal operation. Currently, it can be one of */
export type RevenueWithdrawalState = RevenueWithdrawalStatePending | RevenueWithdrawalStateSucceeded | RevenueWithdrawalStateFailed;
/** This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of */
export type TransactionPartner = TransactionPartnerUser | TransactionPartnerChat | TransactionPartnerAffiliateProgram | TransactionPartnerFragment | TransactionPartnerTelegramAds | TransactionPartnerTelegramApi | TransactionPartnerOther;
/** This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of: */
export type PassportElementError = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified;
/** A placeholder, currently holds no information. Use BotFather to set up your game. */
export type CallbackGame = Record<string, never>;
/**
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 */
export interface Update {
    /** The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
    update_id: Integer;
    /** Optional. New incoming message of any kind - text, photo, sticker, etc. */
    message?: Message;
    /** Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
    edited_message?: Message;
    /** Optional. New incoming channel post of any kind - text, photo, sticker, etc. */
    channel_post?: Message;
    /** Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
    edited_channel_post?: Message;
    /** Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot */
    business_connection?: BusinessConnection;
    /** Optional. New message from a connected business account */
    business_message?: Message;
    /** Optional. New version of a message from a connected business account */
    edited_business_message?: Message;
    /** Optional. Messages were deleted from a connected business account */
    deleted_business_messages?: BusinessMessagesDeleted;
    /** Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots. */
    message_reaction?: MessageReactionUpdated;
    /** Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes. */
    message_reaction_count?: MessageReactionCountUpdated;
    /** Optional. New incoming inline query */
    inline_query?: InlineQuery;
    /** Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
    chosen_inline_result?: ChosenInlineResult;
    /** Optional. New incoming callback query */
    callback_query?: CallbackQuery;
    /** Optional. New incoming shipping query. Only for invoices with flexible price */
    shipping_query?: ShippingQuery;
    /** Optional. New incoming pre-checkout query. Contains full information about checkout */
    pre_checkout_query?: PreCheckoutQuery;
    /** Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat */
    purchased_paid_media?: PaidMediaPurchased;
    /** Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot */
    poll?: Poll;
    /** Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
    poll_answer?: PollAnswer;
    /** Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
    my_chat_member?: ChatMemberUpdated;
    /** Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates. */
    chat_member?: ChatMemberUpdated;
    /** Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
    chat_join_request?: ChatJoinRequest;
    /** Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates. */
    chat_boost?: ChatBoostUpdated;
    /** Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates. */
    removed_chat_boost?: ChatBoostRemoved;
}
/** Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects. */
/** @see {@link getUpdatesResult} for method output */
export interface getUpdatesOptions {
    /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. */
    offset?: Integer;
    /** Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
    limit?: Integer;
    /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
    timeout?: Integer;
    /**
     * A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.
     *
     * Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.
     */
    allowed_updates?: String[];
}
/** Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request (a request with response HTTP status code different from 2XY), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success. */
/** If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content. */
/** @see {@link setWebhookResult} for method output */
export interface setWebhookOptions {
    /** HTTPS URL to send updates to. Use an empty string to remove webhook integration */
    url: String;
    /** Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. */
    certificate?: InputFile;
    /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
    ip_address?: String;
    /** The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput. */
    max_connections?: Integer;
    /**
     * A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.
     * Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
     */
    allowed_updates?: String[];
    /** Pass True to drop all pending updates */
    drop_pending_updates?: Boolean;
    /** A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you. */
    secret_token?: String;
}
/** Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success. */
/** @see {@link deleteWebhookResult} for method output */
export interface deleteWebhookOptions {
    /** Pass True to drop all pending updates */
    drop_pending_updates?: Boolean;
}
/** Describes the current status of a webhook. */
export interface WebhookInfo {
    /** Webhook URL, may be empty if webhook is not set up */
    url: String;
    /** True, if a custom certificate was provided for webhook certificate checks */
    has_custom_certificate: Boolean;
    /** Number of updates awaiting delivery */
    pending_update_count: Integer;
    /** Optional. Currently used webhook IP address */
    ip_address?: String;
    /** Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_date?: Integer;
    /** Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: String;
    /** Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters */
    last_synchronization_error_date?: Integer;
    /** Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    max_connections?: Integer;
    /** Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
    allowed_updates?: String[];
}
/** This object represents a Telegram user or bot. */
export interface User {
    /** Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: Integer;
    /** True, if this user is a bot */
    is_bot: Boolean;
    /** User's or bot's first name */
    first_name: String;
    /** Optional. User's or bot's last name */
    last_name?: String;
    /** Optional. User's or bot's username */
    username?: String;
    /** Optional. IETF language tag of the user's language */
    language_code?: String;
    /** Optional. True, if this user is a Telegram Premium user */
    is_premium?: True;
    /** Optional. True, if this user added the bot to the attachment menu */
    added_to_attachment_menu?: True;
    /** Optional. True, if the bot can be invited to groups. Returned only in getMe. */
    can_join_groups?: Boolean;
    /** Optional. True, if privacy mode is disabled for the bot. Returned only in getMe. */
    can_read_all_group_messages?: Boolean;
    /** Optional. True, if the bot supports inline queries. Returned only in getMe. */
    supports_inline_queries?: Boolean;
    /** Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe. */
    can_connect_to_business?: Boolean;
    /** Optional. True, if the bot has a main Web App. Returned only in getMe. */
    has_main_web_app?: Boolean;
}
/** This object represents a chat. */
export interface Chat {
    /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: Integer;
    /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: String;
    /** Optional. Title, for supergroups, channels and group chats */
    title?: String;
    /** Optional. Username, for private chats, supergroups and channels if available */
    username?: String;
    /** Optional. First name of the other party in a private chat */
    first_name?: String;
    /** Optional. Last name of the other party in a private chat */
    last_name?: String;
    /** Optional. True, if the supergroup chat is a forum (has topics enabled) */
    is_forum?: True;
}
/** This object contains full information about a chat. */
export interface ChatFullInfo {
    /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: Integer;
    /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: String;
    /** Optional. Title, for supergroups, channels and group chats */
    title?: String;
    /** Optional. Username, for private chats, supergroups and channels if available */
    username?: String;
    /** Optional. First name of the other party in a private chat */
    first_name?: String;
    /** Optional. Last name of the other party in a private chat */
    last_name?: String;
    /** Optional. True, if the supergroup chat is a forum (has topics enabled) */
    is_forum?: True;
    /** Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. */
    accent_color_id: Integer;
    /** The maximum number of reactions that can be set on a message in the chat */
    max_reaction_count: Integer;
    /** Optional. Chat photo */
    photo?: ChatPhoto;
    /** Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels */
    active_usernames?: String[];
    /** Optional. For private chats, the date of birth of the user */
    birthdate?: Birthdate;
    /** Optional. For private chats with business accounts, the intro of the business */
    business_intro?: BusinessIntro;
    /** Optional. For private chats with business accounts, the location of the business */
    business_location?: BusinessLocation;
    /** Optional. For private chats with business accounts, the opening hours of the business */
    business_opening_hours?: BusinessOpeningHours;
    /** Optional. For private chats, the personal channel of the user */
    personal_chat?: Chat;
    /** Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. */
    available_reactions?: ReactionType[];
    /** Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background */
    background_custom_emoji_id?: String;
    /** Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details. */
    profile_accent_color_id?: Integer;
    /** Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background */
    profile_background_custom_emoji_id?: String;
    /** Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat */
    emoji_status_custom_emoji_id?: String;
    /** Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any */
    emoji_status_expiration_date?: Integer;
    /** Optional. Bio of the other party in a private chat */
    bio?: String;
    /** Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user */
    has_private_forwards?: True;
    /** Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat */
    has_restricted_voice_and_video_messages?: True;
    /** Optional. True, if users need to join the supergroup before they can send messages */
    join_to_send_messages?: True;
    /** Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators */
    join_by_request?: True;
    /** Optional. Description, for groups, supergroups and channel chats */
    description?: String;
    /** Optional. Primary invite link, for groups, supergroups and channel chats */
    invite_link?: String;
    /** Optional. The most recent pinned message (by sending date) */
    pinned_message?: Message;
    /** Optional. Default chat member permissions, for groups and supergroups */
    permissions?: ChatPermissions;
    /** Information about types of gifts that are accepted by the chat or by the corresponding user for private chats */
    accepted_gift_types: AcceptedGiftTypes;
    /** Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats. */
    can_send_paid_media?: True;
    /** Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds */
    slow_mode_delay?: Integer;
    /** Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions */
    unrestrict_boost_count?: Integer;
    /** Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds */
    message_auto_delete_time?: Integer;
    /** Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. */
    has_aggressive_anti_spam_enabled?: True;
    /** Optional. True, if non-administrators can only get the list of bots and administrators in the chat */
    has_hidden_members?: True;
    /** Optional. True, if messages from the chat can't be forwarded to other chats */
    has_protected_content?: True;
    /** Optional. True, if new chat members will have access to old messages; available only to chat administrators */
    has_visible_history?: True;
    /** Optional. For supergroups, name of the group sticker set */
    sticker_set_name?: String;
    /** Optional. True, if the bot can change the group sticker set */
    can_set_sticker_set?: True;
    /** Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. */
    custom_emoji_sticker_set_name?: String;
    /** Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
    linked_chat_id?: Integer;
    /** Optional. For supergroups, the location to which the supergroup is connected */
    location?: ChatLocation;
}
/** This object represents a message. */
export interface Message {
    /** Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent */
    message_id: Integer;
    /** Optional. Unique identifier of a message thread to which the message belongs; for supergroups only */
    message_thread_id?: Integer;
    /** Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats */
    from?: User;
    /** Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats. */
    sender_chat?: Chat;
    /** Optional. If the sender of the message boosted the chat, the number of boosts added by the user */
    sender_boost_count?: Integer;
    /** Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account. */
    sender_business_bot?: User;
    /** Date the message was sent in Unix time. It is always a positive number, representing a valid date. */
    date: Integer;
    /** Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier. */
    business_connection_id?: String;
    /** Chat the message belongs to */
    chat: Chat;
    /** Optional. Information about the original message for forwarded messages */
    forward_origin?: MessageOrigin;
    /** Optional. True, if the message is sent to a forum topic */
    is_topic_message?: True;
    /** Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group */
    is_automatic_forward?: True;
    /** Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    reply_to_message?: Message;
    /** Optional. Information about the message that is being replied to, which may come from another chat or forum topic */
    external_reply?: ExternalReplyInfo;
    /** Optional. For replies that quote part of the original message, the quoted part of the message */
    quote?: TextQuote;
    /** Optional. For replies to a story, the original story */
    reply_to_story?: Story;
    /** Optional. Bot through which the message was sent */
    via_bot?: User;
    /** Optional. Date the message was last edited in Unix time */
    edit_date?: Integer;
    /** Optional. True, if the message can't be forwarded */
    has_protected_content?: True;
    /** Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message */
    is_from_offline?: True;
    /** Optional. The unique identifier of a media message group this message belongs to */
    media_group_id?: String;
    /** Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
    author_signature?: String;
    /** Optional. The number of Telegram Stars that were paid by the sender of the message to send it */
    paid_star_count?: Integer;
    /** Optional. For text messages, the actual UTF-8 text of the message */
    text?: String;
    /** Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    entities?: MessageEntity[];
    /** Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed */
    link_preview_options?: LinkPreviewOptions;
    /** Optional. Unique identifier of the message effect added to the message */
    effect_id?: String;
    /** Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
    animation?: Animation;
    /** Optional. Message is an audio file, information about the file */
    audio?: Audio;
    /** Optional. Message is a general file, information about the file */
    document?: Document;
    /** Optional. Message contains paid media; information about the paid media */
    paid_media?: PaidMediaInfo;
    /** Optional. Message is a photo, available sizes of the photo */
    photo?: PhotoSize[];
    /** Optional. Message is a sticker, information about the sticker */
    sticker?: Sticker;
    /** Optional. Message is a forwarded story */
    story?: Story;
    /** Optional. Message is a video, information about the video */
    video?: Video;
    /** Optional. Message is a video note, information about the video message */
    video_note?: VideoNote;
    /** Optional. Message is a voice message, information about the file */
    voice?: Voice;
    /** Optional. Caption for the animation, audio, document, paid media, photo, video or voice */
    caption?: String;
    /** Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    caption_entities?: MessageEntity[];
    /** Optional. True, if the caption must be shown above the message media */
    show_caption_above_media?: True;
    /** Optional. True, if the message media is covered by a spoiler animation */
    has_media_spoiler?: True;
    /** Optional. Message is a checklist */
    checklist?: Checklist;
    /** Optional. Message is a shared contact, information about the contact */
    contact?: Contact;
    /** Optional. Message is a dice with random value */
    dice?: Dice;
    /** Optional. Message is a game, information about the game. More about games » */
    game?: Game;
    /** Optional. Message is a native poll, information about the poll */
    poll?: Poll;
    /** Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
    venue?: Venue;
    /** Optional. Message is a shared location, information about the location */
    location?: Location;
    /** Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    new_chat_members?: User[];
    /** Optional. A member was removed from the group, information about them (this member may be the bot itself) */
    left_chat_member?: User;
    /** Optional. A chat title was changed to this value */
    new_chat_title?: String;
    /** Optional. A chat photo was change to this value */
    new_chat_photo?: PhotoSize[];
    /** Optional. Service message: the chat photo was deleted */
    delete_chat_photo?: True;
    /** Optional. Service message: the group has been created */
    group_chat_created?: True;
    /** Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    supergroup_chat_created?: True;
    /** Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    channel_chat_created?: True;
    /** Optional. Service message: auto-delete timer settings changed in the chat */
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
    /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: Integer;
    /** Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id?: Integer;
    /** Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    pinned_message?: MaybeInaccessibleMessage;
    /** Optional. Message is an invoice for a payment, information about the invoice. More about payments » */
    invoice?: Invoice;
    /** Optional. Message is a service message about a successful payment, information about the payment. More about payments » */
    successful_payment?: SuccessfulPayment;
    /** Optional. Message is a service message about a refunded payment, information about the payment. More about payments » */
    refunded_payment?: RefundedPayment;
    /** Optional. Service message: users were shared with the bot */
    users_shared?: UsersShared;
    /** Optional. Service message: a chat was shared with the bot */
    chat_shared?: ChatShared;
    /** Optional. Service message: a regular gift was sent or received */
    gift?: GiftInfo;
    /** Optional. Service message: a unique gift was sent or received */
    unique_gift?: UniqueGiftInfo;
    /** Optional. The domain name of the website on which the user has logged in. More about Telegram Login » */
    connected_website?: String;
    /** Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess */
    write_access_allowed?: WriteAccessAllowed;
    /** Optional. Telegram Passport data */
    passport_data?: PassportData;
    /** Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
    proximity_alert_triggered?: ProximityAlertTriggered;
    /** Optional. Service message: user boosted the chat */
    boost_added?: ChatBoostAdded;
    /** Optional. Service message: chat background set */
    chat_background_set?: ChatBackground;
    /** Optional. Service message: some tasks in a checklist were marked as done or not done */
    checklist_tasks_done?: ChecklistTasksDone;
    /** Optional. Service message: tasks were added to a checklist */
    checklist_tasks_added?: ChecklistTasksAdded;
    /** Optional. Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed */
    direct_message_price_changed?: DirectMessagePriceChanged;
    /** Optional. Service message: forum topic created */
    forum_topic_created?: ForumTopicCreated;
    /** Optional. Service message: forum topic edited */
    forum_topic_edited?: ForumTopicEdited;
    /** Optional. Service message: forum topic closed */
    forum_topic_closed?: ForumTopicClosed;
    /** Optional. Service message: forum topic reopened */
    forum_topic_reopened?: ForumTopicReopened;
    /** Optional. Service message: the 'General' forum topic hidden */
    general_forum_topic_hidden?: GeneralForumTopicHidden;
    /** Optional. Service message: the 'General' forum topic unhidden */
    general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
    /** Optional. Service message: a scheduled giveaway was created */
    giveaway_created?: GiveawayCreated;
    /** Optional. The message is a scheduled giveaway message */
    giveaway?: Giveaway;
    /** Optional. A giveaway with public winners was completed */
    giveaway_winners?: GiveawayWinners;
    /** Optional. Service message: a giveaway without public winners was completed */
    giveaway_completed?: GiveawayCompleted;
    /** Optional. Service message: the price for paid messages has changed in the chat */
    paid_message_price_changed?: PaidMessagePriceChanged;
    /** Optional. Service message: video chat scheduled */
    video_chat_scheduled?: VideoChatScheduled;
    /** Optional. Service message: video chat started */
    video_chat_started?: VideoChatStarted;
    /** Optional. Service message: video chat ended */
    video_chat_ended?: VideoChatEnded;
    /** Optional. Service message: new participants invited to a video chat */
    video_chat_participants_invited?: VideoChatParticipantsInvited;
    /** Optional. Service message: data sent by a Web App */
    web_app_data?: WebAppData;
    /** Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
    reply_markup?: InlineKeyboardMarkup;
}
/** This object represents a unique message identifier. */
export interface MessageId {
    /** Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent */
    message_id: Integer;
}
/** This object describes a message that was deleted or is otherwise inaccessible to the bot. */
export interface InaccessibleMessage {
    /** Chat the message belonged to */
    chat: Chat;
    /** Unique message identifier inside the chat */
    message_id: Integer;
    /** Always 0. The field can be used to differentiate regular and inaccessible messages. */
    date: Integer;
}
/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export interface MessageEntity {
    /** Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag or #hashtag@chatusername), “cashtag” ($USD or $USD@chatusername), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers) */
    type: String;
    /** Offset in UTF-16 code units to the start of the entity */
    offset: Integer;
    /** Length of the entity in UTF-16 code units */
    length: Integer;
    /** Optional. For “text_link” only, URL that will be opened after user taps on the text */
    url?: String;
    /** Optional. For “text_mention” only, the mentioned user */
    user?: User;
    /** Optional. For “pre” only, the programming language of the entity text */
    language?: String;
    /** Optional. For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker */
    custom_emoji_id?: String;
}
/** This object contains information about the quoted part of a message that is replied to by the given message. */
export interface TextQuote {
    /** Text of the quoted part of a message that is replied to by the given message */
    text: String;
    /** Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes. */
    entities?: MessageEntity[];
    /** Approximate quote position in the original message in UTF-16 code units as specified by the sender */
    position: Integer;
    /** Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server. */
    is_manual?: True;
}
/** This object contains information about a message that is being replied to, which may come from another chat or forum topic. */
export interface ExternalReplyInfo {
    /** Origin of the message replied to by the given message */
    origin: MessageOrigin;
    /** Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel. */
    chat?: Chat;
    /** Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel. */
    message_id?: Integer;
    /** Optional. Options used for link preview generation for the original message, if it is a text message */
    link_preview_options?: LinkPreviewOptions;
    /** Optional. Message is an animation, information about the animation */
    animation?: Animation;
    /** Optional. Message is an audio file, information about the file */
    audio?: Audio;
    /** Optional. Message is a general file, information about the file */
    document?: Document;
    /** Optional. Message contains paid media; information about the paid media */
    paid_media?: PaidMediaInfo;
    /** Optional. Message is a photo, available sizes of the photo */
    photo?: PhotoSize[];
    /** Optional. Message is a sticker, information about the sticker */
    sticker?: Sticker;
    /** Optional. Message is a forwarded story */
    story?: Story;
    /** Optional. Message is a video, information about the video */
    video?: Video;
    /** Optional. Message is a video note, information about the video message */
    video_note?: VideoNote;
    /** Optional. Message is a voice message, information about the file */
    voice?: Voice;
    /** Optional. True, if the message media is covered by a spoiler animation */
    has_media_spoiler?: True;
    /** Optional. Message is a checklist */
    checklist?: Checklist;
    /** Optional. Message is a shared contact, information about the contact */
    contact?: Contact;
    /** Optional. Message is a dice with random value */
    dice?: Dice;
    /** Optional. Message is a game, information about the game. More about games » */
    game?: Game;
    /** Optional. Message is a scheduled giveaway, information about the giveaway */
    giveaway?: Giveaway;
    /** Optional. A giveaway with public winners was completed */
    giveaway_winners?: GiveawayWinners;
    /** Optional. Message is an invoice for a payment, information about the invoice. More about payments » */
    invoice?: Invoice;
    /** Optional. Message is a shared location, information about the location */
    location?: Location;
    /** Optional. Message is a native poll, information about the poll */
    poll?: Poll;
    /** Optional. Message is a venue, information about the venue */
    venue?: Venue;
}
/** Describes reply parameters for the message that is being sent. */
export interface ReplyParameters {
    /** Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified */
    message_id: Integer;
    /** Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account. */
    chat_id?: Integer | String;
    /** Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account. */
    allow_sending_without_reply?: Boolean;
    /** Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message. */
    quote?: String;
    /** Optional. Mode for parsing entities in the quote. See formatting options for more details. */
    quote_parse_mode?: String;
    /** Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode. */
    quote_entities?: MessageEntity[];
    /** Optional. Position of the quote in the original message in UTF-16 code units */
    quote_position?: Integer;
}
/** The message was originally sent by a known user. */
export interface MessageOriginUser {
    /** Type of the message origin, always “user” */
    type: "user";
    /** Date the message was sent originally in Unix time */
    date: Integer;
    /** User that sent the message originally */
    sender_user: User;
}
/** The message was originally sent by an unknown user. */
export interface MessageOriginHiddenUser {
    /** Type of the message origin, always “hidden_user” */
    type: "hidden_user";
    /** Date the message was sent originally in Unix time */
    date: Integer;
    /** Name of the user that sent the message originally */
    sender_user_name: String;
}
/** The message was originally sent on behalf of a chat to a group chat. */
export interface MessageOriginChat {
    /** Type of the message origin, always “chat” */
    type: "chat";
    /** Date the message was sent originally in Unix time */
    date: Integer;
    /** Chat that sent the message originally */
    sender_chat: Chat;
    /** Optional. For messages originally sent by an anonymous chat administrator, original message author signature */
    author_signature?: String;
}
/** The message was originally sent to a channel chat. */
export interface MessageOriginChannel {
    /** Type of the message origin, always “channel” */
    type: "channel";
    /** Date the message was sent originally in Unix time */
    date: Integer;
    /** Channel chat to which the message was originally sent */
    chat: Chat;
    /** Unique message identifier inside the chat */
    message_id: Integer;
    /** Optional. Signature of the original post author */
    author_signature?: String;
}
/** This object represents one size of a photo or a file / sticker thumbnail. */
export interface PhotoSize {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Photo width */
    width: Integer;
    /** Photo height */
    height: Integer;
    /** Optional. File size in bytes */
    file_size?: Integer;
}
/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface Animation {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Video width as defined by the sender */
    width: Integer;
    /** Video height as defined by the sender */
    height: Integer;
    /** Duration of the video in seconds as defined by the sender */
    duration: Integer;
    /** Optional. Animation thumbnail as defined by the sender */
    thumbnail?: PhotoSize;
    /** Optional. Original animation filename as defined by the sender */
    file_name?: String;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: String;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Integer;
}
/** This object represents an audio file to be treated as music by the Telegram clients. */
export interface Audio {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Duration of the audio in seconds as defined by the sender */
    duration: Integer;
    /** Optional. Performer of the audio as defined by the sender or by audio tags */
    performer?: String;
    /** Optional. Title of the audio as defined by the sender or by audio tags */
    title?: String;
    /** Optional. Original filename as defined by the sender */
    file_name?: String;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: String;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Integer;
    /** Optional. Thumbnail of the album cover to which the music file belongs */
    thumbnail?: PhotoSize;
}
/** This object represents a general file (as opposed to photos, voice messages and audio files). */
export interface Document {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Optional. Document thumbnail as defined by the sender */
    thumbnail?: PhotoSize;
    /** Optional. Original filename as defined by the sender */
    file_name?: String;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: String;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Integer;
}
/** This object represents a story. */
export interface Story {
    /** Chat that posted the story */
    chat: Chat;
    /** Unique identifier for the story in the chat */
    id: Integer;
}
/** This object represents a video file. */
export interface Video {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Video width as defined by the sender */
    width: Integer;
    /** Video height as defined by the sender */
    height: Integer;
    /** Duration of the video in seconds as defined by the sender */
    duration: Integer;
    /** Optional. Video thumbnail */
    thumbnail?: PhotoSize;
    /** Optional. Available sizes of the cover of the video in the message */
    cover?: PhotoSize[];
    /** Optional. Timestamp in seconds from which the video will play in the message */
    start_timestamp?: Integer;
    /** Optional. Original filename as defined by the sender */
    file_name?: String;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: String;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Integer;
}
/** This object represents a video message (available in Telegram apps as of v.4.0). */
export interface VideoNote {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Video width and height (diameter of the video message) as defined by the sender */
    length: Integer;
    /** Duration of the video in seconds as defined by the sender */
    duration: Integer;
    /** Optional. Video thumbnail */
    thumbnail?: PhotoSize;
    /** Optional. File size in bytes */
    file_size?: Integer;
}
/** This object represents a voice note. */
export interface Voice {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Duration of the audio in seconds as defined by the sender */
    duration: Integer;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: String;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Integer;
}
/** Describes the paid media added to a message. */
export interface PaidMediaInfo {
    /** The number of Telegram Stars that must be paid to buy access to the media */
    star_count: Integer;
    /** Information about the paid media */
    paid_media: PaidMedia[];
}
/** The paid media isn't available before the payment. */
export interface PaidMediaPreview {
    /** Type of the paid media, always “preview” */
    type: "preview";
    /** Optional. Media width as defined by the sender */
    width?: Integer;
    /** Optional. Media height as defined by the sender */
    height?: Integer;
    /** Optional. Duration of the media in seconds as defined by the sender */
    duration?: Integer;
}
/** The paid media is a photo. */
export interface PaidMediaPhoto {
    /** Type of the paid media, always “photo” */
    type: "photo";
    /** The photo */
    photo: PhotoSize[];
}
/** The paid media is a video. */
export interface PaidMediaVideo {
    /** Type of the paid media, always “video” */
    type: "video";
    /** The video */
    video: Video;
}
/** This object represents a phone contact. */
export interface Contact {
    /** Contact's phone number */
    phone_number: String;
    /** Contact's first name */
    first_name: String;
    /** Optional. Contact's last name */
    last_name?: String;
    /** Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_id?: Integer;
    /** Optional. Additional data about the contact in the form of a vCard */
    vcard?: String;
}
/** This object represents an animated emoji that displays a random value. */
export interface Dice {
    /** Emoji on which the dice throw animation is based */
    emoji: String;
    /** Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji */
    value: Integer;
}
/** This object contains information about one answer option in a poll. */
export interface PollOption {
    /** Option text, 1-100 characters */
    text: String;
    /** Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts */
    text_entities?: MessageEntity[];
    /** Number of users that voted for this option */
    voter_count: Integer;
}
/** This object contains information about one answer option in a poll to be sent. */
export interface InputPollOption {
    /** Option text, 1-100 characters */
    text: String;
    /** Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed */
    text_parse_mode?: String;
    /** Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode */
    text_entities?: MessageEntity[];
}
/** This object represents an answer of a user in a non-anonymous poll. */
export interface PollAnswer {
    /** Unique poll identifier */
    poll_id: String;
    /** Optional. The chat that changed the answer to the poll, if the voter is anonymous */
    voter_chat?: Chat;
    /** Optional. The user that changed the answer to the poll, if the voter isn't anonymous */
    user?: User;
    /** 0-based identifiers of chosen answer options. May be empty if the vote was retracted. */
    option_ids: Integer[];
}
/** This object contains information about a poll. */
export interface Poll {
    /** Unique poll identifier */
    id: String;
    /** Poll question, 1-300 characters */
    question: String;
    /** Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions */
    question_entities?: MessageEntity[];
    /** List of poll options */
    options: PollOption[];
    /** Total number of users that voted in the poll */
    total_voter_count: Integer;
    /** True, if the poll is closed */
    is_closed: Boolean;
    /** True, if the poll is anonymous */
    is_anonymous: Boolean;
    /** Poll type, currently can be “regular” or “quiz” */
    type: String;
    /** True, if the poll allows multiple answers */
    allows_multiple_answers: Boolean;
    /** Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
    correct_option_id?: Integer;
    /** Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
    explanation?: String;
    /** Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
    explanation_entities?: MessageEntity[];
    /** Optional. Amount of time in seconds the poll will be active after creation */
    open_period?: Integer;
    /** Optional. Point in time (Unix timestamp) when the poll will be automatically closed */
    close_date?: Integer;
}
/** Describes a task in a checklist. */
export interface ChecklistTask {
    /** Unique identifier of the task */
    id: Integer;
    /** Text of the task */
    text: String;
    /** Optional. Special entities that appear in the task text */
    text_entities?: MessageEntity[];
    /** Optional. User that completed the task; omitted if the task wasn't completed */
    completed_by_user?: User;
    /** Optional. Point in time (Unix timestamp) when the task was completed; 0 if the task wasn't completed */
    completion_date?: Integer;
}
/** Describes a checklist. */
export interface Checklist {
    /** Title of the checklist */
    title: String;
    /** Optional. Special entities that appear in the checklist title */
    title_entities?: MessageEntity[];
    /** List of tasks in the checklist */
    tasks: ChecklistTask[];
    /** Optional. True, if users other than the creator of the list can add tasks to the list */
    others_can_add_tasks?: True;
    /** Optional. True, if users other than the creator of the list can mark tasks as done or not done */
    others_can_mark_tasks_as_done?: True;
}
/** Describes a task to add to a checklist. */
export interface InputChecklistTask {
    /** Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist */
    id: Integer;
    /** Text of the task; 1-100 characters after entities parsing */
    text: String;
    /** Optional. Mode for parsing entities in the text. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the text, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed. */
    text_entities?: MessageEntity[];
}
/** Describes a checklist to create. */
export interface InputChecklist {
    /** Title of the checklist; 1-255 characters after entities parsing */
    title: String;
    /** Optional. Mode for parsing entities in the title. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed. */
    title_entities?: MessageEntity[];
    /** List of 1-30 tasks in the checklist */
    tasks: InputChecklistTask[];
    /** Optional. Pass True if other users can add tasks to the checklist */
    others_can_add_tasks?: Boolean;
    /** Optional. Pass True if other users can mark tasks as done or not done in the checklist */
    others_can_mark_tasks_as_done?: Boolean;
}
/** Describes a service message about checklist tasks marked as done or not done. */
export interface ChecklistTasksDone {
    /** Optional. Message containing the checklist whose tasks were marked as done or not done. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. */
    checklist_message?: Message;
    /** Optional. Identifiers of the tasks that were marked as done */
    marked_as_done_task_ids?: Integer[];
    /** Optional. Identifiers of the tasks that were marked as not done */
    marked_as_not_done_task_ids?: Integer[];
}
/** Describes a service message about tasks added to a checklist. */
export interface ChecklistTasksAdded {
    /** Optional. Message containing the checklist to which the tasks were added. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. */
    checklist_message?: Message;
    /** List of tasks added to the checklist */
    tasks: ChecklistTask[];
}
/** This object represents a point on the map. */
export interface Location {
    /** Latitude as defined by the sender */
    latitude: Float;
    /** Longitude as defined by the sender */
    longitude: Float;
    /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Float;
    /** Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
    live_period?: Integer;
    /** Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only. */
    heading?: Integer;
    /** Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
    proximity_alert_radius?: Integer;
}
/** This object represents a venue. */
export interface Venue {
    /** Venue location. Can't be a live location */
    location: Location;
    /** Name of the venue */
    title: String;
    /** Address of the venue */
    address: String;
    /** Optional. Foursquare identifier of the venue */
    foursquare_id?: String;
    /** Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: String;
    /** Optional. Google Places identifier of the venue */
    google_place_id?: String;
    /** Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: String;
}
/** Describes data sent from a Web App to the bot. */
export interface WebAppData {
    /** The data. Be aware that a bad client can send arbitrary data in this field. */
    data: String;
    /** Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
    button_text: String;
}
/** This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user. */
export interface ProximityAlertTriggered {
    /** User that triggered the alert */
    traveler: User;
    /** User that set the alert */
    watcher: User;
    /** The distance between the users */
    distance: Integer;
}
/** This object represents a service message about a change in auto-delete timer settings. */
export interface MessageAutoDeleteTimerChanged {
    /** New auto-delete time for messages in the chat; in seconds */
    message_auto_delete_time: Integer;
}
/** This object represents a service message about a user boosting a chat. */
export interface ChatBoostAdded {
    /** Number of boosts added by the user */
    boost_count: Integer;
}
/** The background is filled using the selected color. */
export interface BackgroundFillSolid {
    /** Type of the background fill, always “solid” */
    type: "solid";
    /** The color of the background fill in the RGB24 format */
    color: Integer;
}
/** The background is a gradient fill. */
export interface BackgroundFillGradient {
    /** Type of the background fill, always “gradient” */
    type: "gradient";
    /** Top color of the gradient in the RGB24 format */
    top_color: Integer;
    /** Bottom color of the gradient in the RGB24 format */
    bottom_color: Integer;
    /** Clockwise rotation angle of the background fill in degrees; 0-359 */
    rotation_angle: Integer;
}
/** The background is a freeform gradient that rotates after every message in the chat. */
export interface BackgroundFillFreeformGradient {
    /** Type of the background fill, always “freeform_gradient” */
    type: "freeform_gradient";
    /** A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format */
    colors: Integer[];
}
/** The background is automatically filled based on the selected colors. */
export interface BackgroundTypeFill {
    /** Type of the background, always “fill” */
    type: "fill";
    /** The background fill */
    fill: BackgroundFill;
    /** Dimming of the background in dark themes, as a percentage; 0-100 */
    dark_theme_dimming: Integer;
}
/** The background is a wallpaper in the JPEG format. */
export interface BackgroundTypeWallpaper {
    /** Type of the background, always “wallpaper” */
    type: "wallpaper";
    /** Document with the wallpaper */
    document: Document;
    /** Dimming of the background in dark themes, as a percentage; 0-100 */
    dark_theme_dimming: Integer;
    /** Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12 */
    is_blurred?: True;
    /** Optional. True, if the background moves slightly when the device is tilted */
    is_moving?: True;
}
/** The background is a .PNG or .TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user. */
export interface BackgroundTypePattern {
    /** Type of the background, always “pattern” */
    type: "pattern";
    /** Document with the pattern */
    document: Document;
    /** The background fill that is combined with the pattern */
    fill: BackgroundFill;
    /** Intensity of the pattern when it is shown above the filled background; 0-100 */
    intensity: Integer;
    /** Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only */
    is_inverted?: True;
    /** Optional. True, if the background moves slightly when the device is tilted */
    is_moving?: True;
}
/** The background is taken directly from a built-in chat theme. */
export interface BackgroundTypeChatTheme {
    /** Type of the background, always “chat_theme” */
    type: "chat_theme";
    /** Name of the chat theme, which is usually an emoji */
    theme_name: String;
}
/** This object represents a chat background. */
export interface ChatBackground {
    /** Type of the background */
    type: BackgroundType;
}
/** This object represents a service message about a new forum topic created in the chat. */
export interface ForumTopicCreated {
    /** Name of the topic */
    name: String;
    /** Color of the topic icon in RGB format */
    icon_color: Integer;
    /** Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: String;
}
/** This object represents a service message about an edited forum topic. */
export interface ForumTopicEdited {
    /** Optional. New name of the topic, if it was edited */
    name?: String;
    /** Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed */
    icon_custom_emoji_id?: String;
}
/** This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button. */
export interface SharedUser {
    /** Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. */
    user_id: Integer;
    /** Optional. First name of the user, if the name was requested by the bot */
    first_name?: String;
    /** Optional. Last name of the user, if the name was requested by the bot */
    last_name?: String;
    /** Optional. Username of the user, if the username was requested by the bot */
    username?: String;
    /** Optional. Available sizes of the chat photo, if the photo was requested by the bot */
    photo?: PhotoSize[];
}
/** This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button. */
export interface UsersShared {
    /** Identifier of the request */
    request_id: Integer;
    /** Information about users shared with the bot. */
    users: SharedUser[];
}
/** This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button. */
export interface ChatShared {
    /** Identifier of the request */
    request_id: Integer;
    /** Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
    chat_id: Integer;
    /** Optional. Title of the chat, if the title was requested by the bot. */
    title?: String;
    /** Optional. Username of the chat, if the username was requested by the bot and available. */
    username?: String;
    /** Optional. Available sizes of the chat photo, if the photo was requested by the bot */
    photo?: PhotoSize[];
}
/** This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess. */
export interface WriteAccessAllowed {
    /** Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess */
    from_request?: Boolean;
    /** Optional. Name of the Web App, if the access was granted when the Web App was launched from a link */
    web_app_name?: String;
    /** Optional. True, if the access was granted when the bot was added to the attachment or side menu */
    from_attachment_menu?: Boolean;
}
/** This object represents a service message about a video chat scheduled in the chat. */
export interface VideoChatScheduled {
    /** Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
    start_date: Integer;
}
/** This object represents a service message about a video chat ended in the chat. */
export interface VideoChatEnded {
    /** Video chat duration in seconds */
    duration: Integer;
}
/** This object represents a service message about new members invited to a video chat. */
export interface VideoChatParticipantsInvited {
    /** New members that were invited to the video chat */
    users: User[];
}
/** Describes a service message about a change in the price of paid messages within a chat. */
export interface PaidMessagePriceChanged {
    /** The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message */
    paid_message_star_count: Integer;
}
/** Describes a service message about a change in the price of direct messages sent to a channel chat. */
export interface DirectMessagePriceChanged {
    /** True, if direct messages are enabled for the channel chat; false otherwise */
    are_direct_messages_enabled: Boolean;
    /** Optional. The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0. */
    direct_message_star_count?: Integer;
}
/** This object represents a service message about the creation of a scheduled giveaway. */
export interface GiveawayCreated {
    /** Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only */
    prize_star_count?: Integer;
}
/** This object represents a message about a scheduled giveaway. */
export interface Giveaway {
    /** The list of chats which the user must join to participate in the giveaway */
    chats: Chat[];
    /** Point in time (Unix timestamp) when winners of the giveaway will be selected */
    winners_selection_date: Integer;
    /** The number of users which are supposed to be selected as winners of the giveaway */
    winner_count: Integer;
    /** Optional. True, if only users who join the chats after the giveaway started should be eligible to win */
    only_new_members?: True;
    /** Optional. True, if the list of giveaway winners will be visible to everyone */
    has_public_winners?: True;
    /** Optional. Description of additional giveaway prize */
    prize_description?: String;
    /** Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways. */
    country_codes?: String[];
    /** Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only */
    prize_star_count?: Integer;
    /** Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only */
    premium_subscription_month_count?: Integer;
}
/** This object represents a message about the completion of a giveaway with public winners. */
export interface GiveawayWinners {
    /** The chat that created the giveaway */
    chat: Chat;
    /** Identifier of the message with the giveaway in the chat */
    giveaway_message_id: Integer;
    /** Point in time (Unix timestamp) when winners of the giveaway were selected */
    winners_selection_date: Integer;
    /** Total number of winners in the giveaway */
    winner_count: Integer;
    /** List of up to 100 winners of the giveaway */
    winners: User[];
    /** Optional. The number of other chats the user had to join in order to be eligible for the giveaway */
    additional_chat_count?: Integer;
    /** Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only */
    prize_star_count?: Integer;
    /** Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only */
    premium_subscription_month_count?: Integer;
    /** Optional. Number of undistributed prizes */
    unclaimed_prize_count?: Integer;
    /** Optional. True, if only users who had joined the chats after the giveaway started were eligible to win */
    only_new_members?: True;
    /** Optional. True, if the giveaway was canceled because the payment for it was refunded */
    was_refunded?: True;
    /** Optional. Description of additional giveaway prize */
    prize_description?: String;
}
/** This object represents a service message about the completion of a giveaway without public winners. */
export interface GiveawayCompleted {
    /** Number of winners in the giveaway */
    winner_count: Integer;
    /** Optional. Number of undistributed prizes */
    unclaimed_prize_count?: Integer;
    /** Optional. Message with the giveaway that was completed, if it wasn't deleted */
    giveaway_message?: Message;
    /** Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway. */
    is_star_giveaway?: True;
}
/** Describes the options used for link preview generation. */
export interface LinkPreviewOptions {
    /** Optional. True, if the link preview is disabled */
    is_disabled?: Boolean;
    /** Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used */
    url?: String;
    /** Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview */
    prefer_small_media?: Boolean;
    /** Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview */
    prefer_large_media?: Boolean;
    /** Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text */
    show_above_text?: Boolean;
}
/** This object represent a user's profile pictures. */
export interface UserProfilePhotos {
    /** Total number of profile pictures the target user has */
    total_count: Integer;
    /** Requested profile pictures (in up to 4 sizes each) */
    photos: PhotoSize[];
}
/** This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile. */
export interface File {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Integer;
    /** Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
    file_path?: String;
}
/** Describes a Web App. */
export interface WebAppInfo {
    /** An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
    url: String;
}
/** This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account. */
export interface ReplyKeyboardMarkup {
    /** Array of button rows, each represented by an Array of KeyboardButton objects */
    keyboard: KeyboardButton[];
    /** Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. */
    is_persistent?: Boolean;
    /** Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    resize_keyboard?: Boolean;
    /** Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
    one_time_keyboard?: Boolean;
    /** Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
    input_field_placeholder?: String;
    /**
     * Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
     *
     * Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
     */
    selective?: Boolean;
}
/** This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, String can be used instead of this object to specify the button text. */
export interface KeyboardButton {
    /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    text: String;
    /** Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only. */
    request_users?: KeyboardButtonRequestUsers;
    /** Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only. */
    request_chat?: KeyboardButtonRequestChat;
    /** Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    request_contact?: Boolean;
    /** Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    request_location?: Boolean;
    /** Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    request_poll?: KeyboardButtonPollType;
    /** Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only. */
    web_app?: WebAppInfo;
}
/** This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users » */
export interface KeyboardButtonRequestUsers {
    /** Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message */
    request_id: Integer;
    /** Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied. */
    user_is_bot?: Boolean;
    /** Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied. */
    user_is_premium?: Boolean;
    /** Optional. The maximum number of users to be selected; 1-10. Defaults to 1. */
    max_quantity?: Integer;
    /** Optional. Pass True to request the users' first and last names */
    request_name?: Boolean;
    /** Optional. Pass True to request the users' usernames */
    request_username?: Boolean;
    /** Optional. Pass True to request the users' photos */
    request_photo?: Boolean;
}
/** This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats ». */
export interface KeyboardButtonRequestChat {
    /** Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message */
    request_id: Integer;
    /** Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
    chat_is_channel: Boolean;
    /** Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
    chat_is_forum?: Boolean;
    /** Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
    chat_has_username?: Boolean;
    /** Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
    chat_is_created?: Boolean;
    /** Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied. */
    user_administrator_rights?: ChatAdministratorRights;
    /** Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied. */
    bot_administrator_rights?: ChatAdministratorRights;
    /** Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
    bot_is_member?: Boolean;
    /** Optional. Pass True to request the chat's title */
    request_title?: Boolean;
    /** Optional. Pass True to request the chat's username */
    request_username?: Boolean;
    /** Optional. Pass True to request the chat's photo */
    request_photo?: Boolean;
}
/** This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed. */
export interface KeyboardButtonPollType {
    /** Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
    type?: String;
}
/** Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account. */
export interface ReplyKeyboardRemove {
    /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
    remove_keyboard: True;
    /**
     * Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
     *
     * Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
     */
    selective?: Boolean;
}
/** This object represents an inline keyboard that appears right next to the message it belongs to. */
export interface InlineKeyboardMarkup {
    /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
    inline_keyboard: InlineKeyboardButton[];
}
/** This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button. */
export interface InlineKeyboardButton {
    /** Label text on the button */
    text: String;
    /** Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings. */
    url?: String;
    /** Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes */
    callback_data?: String;
    /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account. */
    web_app?: WebAppInfo;
    /** Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
    login_url?: LoginUrl;
    /** Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent on behalf of a Telegram Business account. */
    switch_inline_query?: String;
    /**
     * Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.
     *
     * This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent on behalf of a Telegram Business account.
     */
    switch_inline_query_current_chat?: String;
    /** Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent on behalf of a Telegram Business account. */
    switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
    /** Optional. Description of the button that copies the specified text to the clipboard. */
    copy_text?: CopyTextButton;
    /**
     * Optional. Description of the game that will be launched when the user presses the button.
     *
     * NOTE: This type of button must always be the first button in the first row.
     */
    callback_game?: CallbackGame;
    /**
     * Optional. Specify True, to send a Pay button. Substrings “” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.
     *
     * NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
     */
    pay?: Boolean;
}
/** This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in: */
/** Telegram apps support these buttons as of version 5.7. */
export interface LoginUrl {
    /**
     * An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.
     *
     * NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
     */
    url: String;
    /** Optional. New text of the button in forwarded messages. */
    forward_text?: String;
    /** Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
    bot_username?: String;
    /** Optional. Pass True to request the permission for your bot to send messages to the user. */
    request_write_access?: Boolean;
}
/** This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query. */
export interface SwitchInlineQueryChosenChat {
    /** Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted */
    query?: String;
    /** Optional. True, if private chats with users can be chosen */
    allow_user_chats?: Boolean;
    /** Optional. True, if private chats with bots can be chosen */
    allow_bot_chats?: Boolean;
    /** Optional. True, if group and supergroup chats can be chosen */
    allow_group_chats?: Boolean;
    /** Optional. True, if channel chats can be chosen */
    allow_channel_chats?: Boolean;
}
/** This object represents an inline keyboard button that copies specified text to the clipboard. */
export interface CopyTextButton {
    /** The text to be copied to the clipboard; 1-256 characters */
    text: String;
}
/** This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present. */
export interface CallbackQuery {
    /** Unique identifier for this query */
    id: String;
    /** Sender */
    from: User;
    /** Optional. Message sent by the bot with the callback button that originated the query */
    message?: MaybeInaccessibleMessage;
    /** Optional. Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id?: String;
    /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
    chat_instance: String;
    /** Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
    data?: String;
    /** Optional. Short name of a Game to be returned, serves as the unique identifier for the game */
    game_short_name?: String;
}
/** Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account. */
export interface ForceReply {
    /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
    force_reply: True;
    /** Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters */
    input_field_placeholder?: String;
    /** Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. */
    selective?: Boolean;
}
/** This object represents a chat photo. */
export interface ChatPhoto {
    /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    small_file_id: String;
    /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    small_file_unique_id: String;
    /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    big_file_id: String;
    /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    big_file_unique_id: String;
}
/** Represents an invite link for a chat. */
export interface ChatInviteLink {
    /** The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”. */
    invite_link: String;
    /** Creator of the link */
    creator: User;
    /** True, if users joining the chat via the link need to be approved by chat administrators */
    creates_join_request: Boolean;
    /** True, if the link is primary */
    is_primary: Boolean;
    /** True, if the link is revoked */
    is_revoked: Boolean;
    /** Optional. Invite link name */
    name?: String;
    /** Optional. Point in time (Unix timestamp) when the link will expire or has been expired */
    expire_date?: Integer;
    /** Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: Integer;
    /** Optional. Number of pending join requests created using this link */
    pending_join_request_count?: Integer;
    /** Optional. The number of seconds the subscription will be active for before the next payment */
    subscription_period?: Integer;
    /** Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link */
    subscription_price?: Integer;
}
/** Represents the rights of an administrator in a chat. */
export interface ChatAdministratorRights {
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: Boolean;
    /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege. */
    can_manage_chat: Boolean;
    /** True, if the administrator can delete messages of other users */
    can_delete_messages: Boolean;
    /** True, if the administrator can manage video chats */
    can_manage_video_chats: Boolean;
    /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
    can_restrict_members: Boolean;
    /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: Boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: Boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: Boolean;
    /** True, if the administrator can post stories to the chat */
    can_post_stories: Boolean;
    /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
    can_edit_stories: Boolean;
    /** True, if the administrator can delete stories posted by other users */
    can_delete_stories: Boolean;
    /** Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only */
    can_post_messages?: Boolean;
    /** Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only */
    can_edit_messages?: Boolean;
    /** Optional. True, if the user is allowed to pin messages; for groups and supergroups only */
    can_pin_messages?: Boolean;
    /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
    can_manage_topics?: Boolean;
}
/** This object represents changes in the status of a chat member. */
export interface ChatMemberUpdated {
    /** Chat the user belongs to */
    chat: Chat;
    /** Performer of the action, which resulted in the change */
    from: User;
    /** Date the change was done in Unix time */
    date: Integer;
    /** Previous information about the chat member */
    old_chat_member: ChatMember;
    /** New information about the chat member */
    new_chat_member: ChatMember;
    /** Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
    invite_link?: ChatInviteLink;
    /** Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator */
    via_join_request?: Boolean;
    /** Optional. True, if the user joined the chat via a chat folder invite link */
    via_chat_folder_invite_link?: Boolean;
}
/** Represents a chat member that owns the chat and has all administrator privileges. */
export interface ChatMemberOwner {
    /** The member's status in the chat, always “creator” */
    status: String;
    /** Information about the user */
    user: User;
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: Boolean;
    /** Optional. Custom title for this user */
    custom_title?: String;
}
/** Represents a chat member that has some additional privileges. */
export interface ChatMemberAdministrator {
    /** The member's status in the chat, always “administrator” */
    status: String;
    /** Information about the user */
    user: User;
    /** True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited: Boolean;
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: Boolean;
    /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege. */
    can_manage_chat: Boolean;
    /** True, if the administrator can delete messages of other users */
    can_delete_messages: Boolean;
    /** True, if the administrator can manage video chats */
    can_manage_video_chats: Boolean;
    /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
    can_restrict_members: Boolean;
    /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: Boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: Boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: Boolean;
    /** True, if the administrator can post stories to the chat */
    can_post_stories: Boolean;
    /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
    can_edit_stories: Boolean;
    /** True, if the administrator can delete stories posted by other users */
    can_delete_stories: Boolean;
    /** Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only */
    can_post_messages?: Boolean;
    /** Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only */
    can_edit_messages?: Boolean;
    /** Optional. True, if the user is allowed to pin messages; for groups and supergroups only */
    can_pin_messages?: Boolean;
    /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
    can_manage_topics?: Boolean;
    /** Optional. Custom title for this user */
    custom_title?: String;
}
/** Represents a chat member that has no additional privileges or restrictions. */
export interface ChatMemberMember {
    /** The member's status in the chat, always “member” */
    status: String;
    /** Information about the user */
    user: User;
    /** Optional. Date when the user's subscription will expire; Unix time */
    until_date?: Integer;
}
/** Represents a chat member that is under certain restrictions in the chat. Supergroups only. */
export interface ChatMemberRestricted {
    /** The member's status in the chat, always “restricted” */
    status: String;
    /** Information about the user */
    user: User;
    /** True, if the user is a member of the chat at the moment of the request */
    is_member: Boolean;
    /** True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
    can_send_messages: Boolean;
    /** True, if the user is allowed to send audios */
    can_send_audios: Boolean;
    /** True, if the user is allowed to send documents */
    can_send_documents: Boolean;
    /** True, if the user is allowed to send photos */
    can_send_photos: Boolean;
    /** True, if the user is allowed to send videos */
    can_send_videos: Boolean;
    /** True, if the user is allowed to send video notes */
    can_send_video_notes: Boolean;
    /** True, if the user is allowed to send voice notes */
    can_send_voice_notes: Boolean;
    /** True, if the user is allowed to send polls and checklists */
    can_send_polls: Boolean;
    /** True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages: Boolean;
    /** True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews: Boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: Boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: Boolean;
    /** True, if the user is allowed to pin messages */
    can_pin_messages: Boolean;
    /** True, if the user is allowed to create forum topics */
    can_manage_topics: Boolean;
    /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever */
    until_date: Integer;
}
/** Represents a chat member that isn't currently a member of the chat, but may join it themselves. */
export interface ChatMemberLeft {
    /** The member's status in the chat, always “left” */
    status: String;
    /** Information about the user */
    user: User;
}
/** Represents a chat member that was banned in the chat and can't return to the chat or view chat messages. */
export interface ChatMemberBanned {
    /** The member's status in the chat, always “kicked” */
    status: String;
    /** Information about the user */
    user: User;
    /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever */
    until_date: Integer;
}
/** Represents a join request sent to a chat. */
export interface ChatJoinRequest {
    /** Chat to which the request was sent */
    chat: Chat;
    /** User that sent the join request */
    from: User;
    /** Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user. */
    user_chat_id: Integer;
    /** Date the request was sent in Unix time */
    date: Integer;
    /** Optional. Bio of the user. */
    bio?: String;
    /** Optional. Chat invite link that was used by the user to send the join request */
    invite_link?: ChatInviteLink;
}
/** Describes actions that a non-administrator user is allowed to take in a chat. */
export interface ChatPermissions {
    /** Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
    can_send_messages?: Boolean;
    /** Optional. True, if the user is allowed to send audios */
    can_send_audios?: Boolean;
    /** Optional. True, if the user is allowed to send documents */
    can_send_documents?: Boolean;
    /** Optional. True, if the user is allowed to send photos */
    can_send_photos?: Boolean;
    /** Optional. True, if the user is allowed to send videos */
    can_send_videos?: Boolean;
    /** Optional. True, if the user is allowed to send video notes */
    can_send_video_notes?: Boolean;
    /** Optional. True, if the user is allowed to send voice notes */
    can_send_voice_notes?: Boolean;
    /** Optional. True, if the user is allowed to send polls and checklists */
    can_send_polls?: Boolean;
    /** Optional. True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages?: Boolean;
    /** Optional. True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews?: Boolean;
    /** Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info?: Boolean;
    /** Optional. True, if the user is allowed to invite new users to the chat */
    can_invite_users?: Boolean;
    /** Optional. True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages?: Boolean;
    /** Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages */
    can_manage_topics?: Boolean;
}
/** Describes the birthdate of a user. */
export interface Birthdate {
    /** Day of the user's birth; 1-31 */
    day: Integer;
    /** Month of the user's birth; 1-12 */
    month: Integer;
    /** Optional. Year of the user's birth */
    year?: Integer;
}
/** Contains information about the start page settings of a Telegram Business account. */
export interface BusinessIntro {
    /** Optional. Title text of the business intro */
    title?: String;
    /** Optional. Message text of the business intro */
    message?: String;
    /** Optional. Sticker of the business intro */
    sticker?: Sticker;
}
/** Contains information about the location of a Telegram Business account. */
export interface BusinessLocation {
    /** Address of the business */
    address: String;
    /** Optional. Location of the business */
    location?: Location;
}
/** Describes an interval of time during which a business is open. */
export interface BusinessOpeningHoursInterval {
    /** The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60 */
    opening_minute: Integer;
    /** The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60 */
    closing_minute: Integer;
}
/** Describes the opening hours of a business. */
export interface BusinessOpeningHours {
    /** Unique name of the time zone for which the opening hours are defined */
    time_zone_name: String;
    /** List of time intervals describing business opening hours */
    opening_hours: BusinessOpeningHoursInterval[];
}
/** Describes the position of a clickable area within a story. */
export interface StoryAreaPosition {
    /** The abscissa of the area's center, as a percentage of the media width */
    x_percentage: Float;
    /** The ordinate of the area's center, as a percentage of the media height */
    y_percentage: Float;
    /** The width of the area's rectangle, as a percentage of the media width */
    width_percentage: Float;
    /** The height of the area's rectangle, as a percentage of the media height */
    height_percentage: Float;
    /** The clockwise rotation angle of the rectangle, in degrees; 0-360 */
    rotation_angle: Float;
    /** The radius of the rectangle corner rounding, as a percentage of the media width */
    corner_radius_percentage: Float;
}
/** Describes the physical address of a location. */
export interface LocationAddress {
    /** The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located */
    country_code: String;
    /** Optional. State of the location */
    state?: String;
    /** Optional. City of the location */
    city?: String;
    /** Optional. Street address of the location */
    street?: String;
}
/** Describes a story area pointing to a location. Currently, a story can have up to 10 location areas. */
export interface StoryAreaTypeLocation {
    /** Type of the area, always “location” */
    type: "location";
    /** Location latitude in degrees */
    latitude: Float;
    /** Location longitude in degrees */
    longitude: Float;
    /** Optional. Address of the location */
    address?: LocationAddress;
}
/** Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas. */
export interface StoryAreaTypeSuggestedReaction {
    /** Type of the area, always “suggested_reaction” */
    type: "suggested_reaction";
    /** Type of the reaction */
    reaction_type: ReactionType;
    /** Optional. Pass True if the reaction area has a dark background */
    is_dark?: Boolean;
    /** Optional. Pass True if reaction area corner is flipped */
    is_flipped?: Boolean;
}
/** Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas. */
export interface StoryAreaTypeLink {
    /** Type of the area, always “link” */
    type: "link";
    /** HTTP or tg:// URL to be opened when the area is clicked */
    url: String;
}
/** Describes a story area containing weather information. Currently, a story can have up to 3 weather areas. */
export interface StoryAreaTypeWeather {
    /** Type of the area, always “weather” */
    type: "weather";
    /** Temperature, in degree Celsius */
    temperature: Float;
    /** Emoji representing the weather */
    emoji: String;
    /** A color of the area background in the ARGB format */
    background_color: Integer;
}
/** Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area. */
export interface StoryAreaTypeUniqueGift {
    /** Type of the area, always “unique_gift” */
    type: "unique_gift";
    /** Unique name of the gift */
    name: String;
}
/** Describes a clickable area on a story media. */
export interface StoryArea {
    /** Position of the area */
    position: StoryAreaPosition;
    /** Type of the area */
    type: StoryAreaType;
}
/** Represents a location to which a chat is connected. */
export interface ChatLocation {
    /** The location to which the supergroup is connected. Can't be a live location. */
    location: Location;
    /** Location address; 1-64 characters, as defined by the chat owner */
    address: String;
}
/** The reaction is based on an emoji. */
export interface ReactionTypeEmoji {
    /** Type of the reaction, always “emoji” */
    type: "emoji";
    /** Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" */
    emoji: String;
}
/** The reaction is based on a custom emoji. */
export interface ReactionTypeCustomEmoji {
    /** Type of the reaction, always “custom_emoji” */
    type: "custom_emoji";
    /** Custom emoji identifier */
    custom_emoji_id: String;
}
/** The reaction is paid. */
export interface ReactionTypePaid {
    /** Type of the reaction, always “paid” */
    type: "paid";
}
/** Represents a reaction added to a message along with the number of times it was added. */
export interface ReactionCount {
    /** Type of the reaction */
    type: ReactionType;
    /** Number of times the reaction was added */
    total_count: Integer;
}
/** This object represents a change of a reaction on a message performed by a user. */
export interface MessageReactionUpdated {
    /** The chat containing the message the user reacted to */
    chat: Chat;
    /** Unique identifier of the message inside the chat */
    message_id: Integer;
    /** Optional. The user that changed the reaction, if the user isn't anonymous */
    user?: User;
    /** Optional. The chat on behalf of which the reaction was changed, if the user is anonymous */
    actor_chat?: Chat;
    /** Date of the change in Unix time */
    date: Integer;
    /** Previous list of reaction types that were set by the user */
    old_reaction: ReactionType[];
    /** New list of reaction types that have been set by the user */
    new_reaction: ReactionType[];
}
/** This object represents reaction changes on a message with anonymous reactions. */
export interface MessageReactionCountUpdated {
    /** The chat containing the message */
    chat: Chat;
    /** Unique message identifier inside the chat */
    message_id: Integer;
    /** Date of the change in Unix time */
    date: Integer;
    /** List of reactions that are present on the message */
    reactions: ReactionCount[];
}
/** This object represents a forum topic. */
export interface ForumTopic {
    /** Unique identifier of the forum topic */
    message_thread_id: Integer;
    /** Name of the topic */
    name: String;
    /** Color of the topic icon in RGB format */
    icon_color: Integer;
    /** Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: String;
}
/** This object represents a gift that can be sent by the bot. */
export interface Gift {
    /** Unique identifier of the gift */
    id: String;
    /** The sticker that represents the gift */
    sticker: Sticker;
    /** The number of Telegram Stars that must be paid to send the sticker */
    star_count: Integer;
    /** Optional. The number of Telegram Stars that must be paid to upgrade the gift to a unique one */
    upgrade_star_count?: Integer;
    /** Optional. The total number of the gifts of this type that can be sent; for limited gifts only */
    total_count?: Integer;
    /** Optional. The number of remaining gifts of this type that can be sent; for limited gifts only */
    remaining_count?: Integer;
}
/** This object represent a list of gifts. */
export interface Gifts {
    /** The list of gifts */
    gifts: Gift[];
}
/** This object describes the model of a unique gift. */
export interface UniqueGiftModel {
    /** Name of the model */
    name: String;
    /** The sticker that represents the unique gift */
    sticker: Sticker;
    /** The number of unique gifts that receive this model for every 1000 gifts upgraded */
    rarity_per_mille: Integer;
}
/** This object describes the symbol shown on the pattern of a unique gift. */
export interface UniqueGiftSymbol {
    /** Name of the symbol */
    name: String;
    /** The sticker that represents the unique gift */
    sticker: Sticker;
    /** The number of unique gifts that receive this model for every 1000 gifts upgraded */
    rarity_per_mille: Integer;
}
/** This object describes the colors of the backdrop of a unique gift. */
export interface UniqueGiftBackdropColors {
    /** The color in the center of the backdrop in RGB format */
    center_color: Integer;
    /** The color on the edges of the backdrop in RGB format */
    edge_color: Integer;
    /** The color to be applied to the symbol in RGB format */
    symbol_color: Integer;
    /** The color for the text on the backdrop in RGB format */
    text_color: Integer;
}
/** This object describes the backdrop of a unique gift. */
export interface UniqueGiftBackdrop {
    /** Name of the backdrop */
    name: String;
    /** Colors of the backdrop */
    colors: UniqueGiftBackdropColors;
    /** The number of unique gifts that receive this backdrop for every 1000 gifts upgraded */
    rarity_per_mille: Integer;
}
/** This object describes a unique gift that was upgraded from a regular gift. */
export interface UniqueGift {
    /** Human-readable name of the regular gift from which this unique gift was upgraded */
    base_name: String;
    /** Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas */
    name: String;
    /** Unique number of the upgraded gift among gifts upgraded from the same regular gift */
    number: Integer;
    /** Model of the gift */
    model: UniqueGiftModel;
    /** Symbol of the gift */
    symbol: UniqueGiftSymbol;
    /** Backdrop of the gift */
    backdrop: UniqueGiftBackdrop;
}
/** Describes a service message about a regular gift that was sent or received. */
export interface GiftInfo {
    /** Information about the gift */
    gift: Gift;
    /** Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts */
    owned_gift_id?: String;
    /** Optional. Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible */
    convert_star_count?: Integer;
    /** Optional. Number of Telegram Stars that were prepaid by the sender for the ability to upgrade the gift */
    prepaid_upgrade_star_count?: Integer;
    /** Optional. True, if the gift can be upgraded to a unique gift */
    can_be_upgraded?: True;
    /** Optional. Text of the message that was added to the gift */
    text?: String;
    /** Optional. Special entities that appear in the text */
    entities?: MessageEntity[];
    /** Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them */
    is_private?: True;
}
/** Describes a service message about a unique gift that was sent or received. */
export interface UniqueGiftInfo {
    /** Information about the gift */
    gift: UniqueGift;
    /** Origin of the gift. Currently, either “upgrade” for gifts upgraded from regular gifts, “transfer” for gifts transferred from other users or channels, or “resale” for gifts bought from other users */
    origin: String;
    /** Optional. For gifts bought from other users, the price paid for the gift */
    last_resale_star_count?: Integer;
    /** Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts */
    owned_gift_id?: String;
    /** Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift */
    transfer_star_count?: Integer;
    /** Optional. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now */
    next_transfer_date?: Integer;
}
/** Describes a regular gift owned by a user or a chat. */
export interface OwnedGiftRegular {
    /** Type of the gift, always “regular” */
    type: "regular";
    /** Information about the regular gift */
    gift: Gift;
    /** Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only */
    owned_gift_id?: String;
    /** Optional. Sender of the gift if it is a known user */
    sender_user?: User;
    /** Date the gift was sent in Unix time */
    send_date: Integer;
    /** Optional. Text of the message that was added to the gift */
    text?: String;
    /** Optional. Special entities that appear in the text */
    entities?: MessageEntity[];
    /** Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them */
    is_private?: True;
    /** Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only */
    is_saved?: True;
    /** Optional. True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only */
    can_be_upgraded?: True;
    /** Optional. True, if the gift was refunded and isn't available anymore */
    was_refunded?: True;
    /** Optional. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars */
    convert_star_count?: Integer;
    /** Optional. Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift */
    prepaid_upgrade_star_count?: Integer;
}
/** Describes a unique gift received and owned by a user or a chat. */
export interface OwnedGiftUnique {
    /** Type of the gift, always “unique” */
    type: "unique";
    /** Information about the unique gift */
    gift: UniqueGift;
    /** Optional. Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only */
    owned_gift_id?: String;
    /** Optional. Sender of the gift if it is a known user */
    sender_user?: User;
    /** Date the gift was sent in Unix time */
    send_date: Integer;
    /** Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only */
    is_saved?: True;
    /** Optional. True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only */
    can_be_transferred?: True;
    /** Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift */
    transfer_star_count?: Integer;
    /** Optional. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now */
    next_transfer_date?: Integer;
}
/** Contains the list of gifts received and owned by a user or a chat. */
export interface OwnedGifts {
    /** The total number of gifts owned by the user or the chat */
    total_count: Integer;
    /** The list of gifts */
    gifts: OwnedGift[];
    /** Optional. Offset for the next request. If empty, then there are no more results */
    next_offset?: String;
}
/** This object describes the types of gifts that can be gifted to a user or a chat. */
export interface AcceptedGiftTypes {
    /** True, if unlimited regular gifts are accepted */
    unlimited_gifts: Boolean;
    /** True, if limited regular gifts are accepted */
    limited_gifts: Boolean;
    /** True, if unique gifts or gifts that can be upgraded to unique for free are accepted */
    unique_gifts: Boolean;
    /** True, if a Telegram Premium subscription is accepted */
    premium_subscription: Boolean;
}
/** Describes an amount of Telegram Stars. */
export interface StarAmount {
    /** Integer amount of Telegram Stars, rounded to 0; can be negative */
    amount: Integer;
    /** Optional. The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if amount is non-positive */
    nanostar_amount?: Integer;
}
/** This object represents a bot command. */
export interface BotCommand {
    /** Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
    command: String;
    /** Description of the command; 1-256 characters. */
    description: String;
}
/** Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user. */
export interface BotCommandScopeDefault {
    /** Scope type, must be default */
    type: "default";
}
/** Represents the scope of bot commands, covering all private chats. */
export interface BotCommandScopeAllPrivateChats {
    /** Scope type, must be all_private_chats */
    type: "all_private_chats";
}
/** Represents the scope of bot commands, covering all group and supergroup chats. */
export interface BotCommandScopeAllGroupChats {
    /** Scope type, must be all_group_chats */
    type: "all_group_chats";
}
/** Represents the scope of bot commands, covering all group and supergroup chat administrators. */
export interface BotCommandScopeAllChatAdministrators {
    /** Scope type, must be all_chat_administrators */
    type: "all_chat_administrators";
}
/** Represents the scope of bot commands, covering a specific chat. */
export interface BotCommandScopeChat {
    /** Scope type, must be chat */
    type: "chat";
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat. */
export interface BotCommandScopeChatAdministrators {
    /** Scope type, must be chat_administrators */
    type: "chat_administrators";
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Represents the scope of bot commands, covering a specific member of a group or supergroup chat. */
export interface BotCommandScopeChatMember {
    /** Scope type, must be chat_member */
    type: "chat_member";
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
}
/** This object represents the bot's name. */
export interface BotName {
    /** The bot's name */
    name: String;
}
/** This object represents the bot's description. */
export interface BotDescription {
    /** The bot's description */
    description: String;
}
/** This object represents the bot's short description. */
export interface BotShortDescription {
    /** The bot's short description */
    short_description: String;
}
/** Represents a menu button, which opens the bot's list of commands. */
export interface MenuButtonCommands {
    /** Type of the button, must be commands */
    type: "commands";
}
/** Represents a menu button, which launches a Web App. */
export interface MenuButtonWebApp {
    /** Type of the button, must be web_app */
    type: "web_app";
    /** Text on the button */
    text: String;
    /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link. */
    web_app: WebAppInfo;
}
/** Describes that no specific value for the menu button was set. */
export interface MenuButtonDefault {
    /** Type of the button, must be default */
    type: "default";
}
/** The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user. */
export interface ChatBoostSourcePremium {
    /** Source of the boost, always “premium” */
    source: String;
    /** User that boosted the chat */
    user: User;
}
/** The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription. */
export interface ChatBoostSourceGiftCode {
    /** Source of the boost, always “gift_code” */
    source: String;
    /** User for which the gift code was created */
    user: User;
}
/** The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways. */
export interface ChatBoostSourceGiveaway {
    /** Source of the boost, always “giveaway” */
    source: String;
    /** Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet. */
    giveaway_message_id: Integer;
    /** Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only */
    user?: User;
    /** Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only */
    prize_star_count?: Integer;
    /** Optional. True, if the giveaway was completed, but there was no user to win the prize */
    is_unclaimed?: True;
}
/** This object contains information about a chat boost. */
export interface ChatBoost {
    /** Unique identifier of the boost */
    boost_id: String;
    /** Point in time (Unix timestamp) when the chat was boosted */
    add_date: Integer;
    /** Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged */
    expiration_date: Integer;
    /** Source of the added boost */
    source: ChatBoostSource;
}
/** This object represents a boost added to a chat or changed. */
export interface ChatBoostUpdated {
    /** Chat which was boosted */
    chat: Chat;
    /** Information about the chat boost */
    boost: ChatBoost;
}
/** This object represents a boost removed from a chat. */
export interface ChatBoostRemoved {
    /** Chat which was boosted */
    chat: Chat;
    /** Unique identifier of the boost */
    boost_id: String;
    /** Point in time (Unix timestamp) when the boost was removed */
    remove_date: Integer;
    /** Source of the removed boost */
    source: ChatBoostSource;
}
/** This object represents a list of boosts added to a chat by a user. */
export interface UserChatBoosts {
    /** The list of boosts added to the chat by the user */
    boosts: ChatBoost[];
}
/** Represents the rights of a business bot. */
export interface BusinessBotRights {
    /** Optional. True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours */
    can_reply?: True;
    /** Optional. True, if the bot can mark incoming private messages as read */
    can_read_messages?: True;
    /** Optional. True, if the bot can delete messages sent by the bot */
    can_delete_sent_messages?: True;
    /** Optional. True, if the bot can delete all private messages in managed chats */
    can_delete_all_messages?: True;
    /** Optional. True, if the bot can edit the first and last name of the business account */
    can_edit_name?: True;
    /** Optional. True, if the bot can edit the bio of the business account */
    can_edit_bio?: True;
    /** Optional. True, if the bot can edit the profile photo of the business account */
    can_edit_profile_photo?: True;
    /** Optional. True, if the bot can edit the username of the business account */
    can_edit_username?: True;
    /** Optional. True, if the bot can change the privacy settings pertaining to gifts for the business account */
    can_change_gift_settings?: True;
    /** Optional. True, if the bot can view gifts and the amount of Telegram Stars owned by the business account */
    can_view_gifts_and_stars?: True;
    /** Optional. True, if the bot can convert regular gifts owned by the business account to Telegram Stars */
    can_convert_gifts_to_stars?: True;
    /** Optional. True, if the bot can transfer and upgrade gifts owned by the business account */
    can_transfer_and_upgrade_gifts?: True;
    /** Optional. True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts */
    can_transfer_stars?: True;
    /** Optional. True, if the bot can post, edit and delete stories on behalf of the business account */
    can_manage_stories?: True;
}
/** Describes the connection of the bot with a business account. */
export interface BusinessConnection {
    /** Unique identifier of the business connection */
    id: String;
    /** Business account user that created the business connection */
    user: User;
    /** Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_chat_id: Integer;
    /** Date the connection was established in Unix time */
    date: Integer;
    /** Optional. Rights of the business bot */
    rights?: BusinessBotRights;
    /** True, if the connection is active */
    is_enabled: Boolean;
}
/** This object is received when messages are deleted from a connected business account. */
export interface BusinessMessagesDeleted {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Information about a chat in the business account. The bot may not have access to the chat or the corresponding user. */
    chat: Chat;
    /** The list of identifiers of deleted messages in the chat of the business account */
    message_ids: Integer[];
}
/** Describes why a request was unsuccessful. */
export interface ResponseParameters {
    /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: Integer;
    /** Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
    retry_after?: Integer;
}
/** Represents a photo to be sent. */
export interface InputMediaPhoto {
    /** Type of the result, must be photo */
    type: "photo";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: String;
    /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Pass True if the photo needs to be covered with a spoiler animation */
    has_spoiler?: Boolean;
}
/** Represents a video to be sent. */
export interface InputMediaVideo {
    /** Type of the result, must be video */
    type: "video";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: String;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: String;
    /** Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    cover?: String;
    /** Optional. Start timestamp for the video in the message */
    start_timestamp?: Integer;
    /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Video width */
    width?: Integer;
    /** Optional. Video height */
    height?: Integer;
    /** Optional. Video duration in seconds */
    duration?: Integer;
    /** Optional. Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: Boolean;
    /** Optional. Pass True if the video needs to be covered with a spoiler animation */
    has_spoiler?: Boolean;
}
/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent. */
export interface InputMediaAnimation {
    /** Type of the result, must be animation */
    type: "animation";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: String;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: String;
    /** Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Animation width */
    width?: Integer;
    /** Optional. Animation height */
    height?: Integer;
    /** Optional. Animation duration in seconds */
    duration?: Integer;
    /** Optional. Pass True if the animation needs to be covered with a spoiler animation */
    has_spoiler?: Boolean;
}
/** Represents an audio file to be treated as music to be sent. */
export interface InputMediaAudio {
    /** Type of the result, must be audio */
    type: "audio";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: String;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: String;
    /** Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Duration of the audio in seconds */
    duration?: Integer;
    /** Optional. Performer of the audio */
    performer?: String;
    /** Optional. Title of the audio */
    title?: String;
}
/** Represents a general file to be sent. */
export interface InputMediaDocument {
    /** Type of the result, must be document */
    type: "document";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: String;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: String;
    /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album. */
    disable_content_type_detection?: Boolean;
}
/** The paid media to send is a photo. */
export interface InputPaidMediaPhoto {
    /** Type of the media, must be photo */
    type: "photo";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: String;
}
/** The paid media to send is a video. */
export interface InputPaidMediaVideo {
    /** Type of the media, must be video */
    type: "video";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: String;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: String;
    /** Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    cover?: String;
    /** Optional. Start timestamp for the video in the message */
    start_timestamp?: Integer;
    /** Optional. Video width */
    width?: Integer;
    /** Optional. Video height */
    height?: Integer;
    /** Optional. Video duration in seconds */
    duration?: Integer;
    /** Optional. Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: Boolean;
}
/** A static profile photo in the .JPG format. */
export interface InputProfilePhotoStatic {
    /** Type of the profile photo, must be static */
    type: "static";
    /** The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    photo: String;
}
/** An animated profile photo in the MPEG4 format. */
export interface InputProfilePhotoAnimated {
    /** Type of the profile photo, must be animated */
    type: "animated";
    /** The animated profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    animation: String;
    /** Optional. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0. */
    main_frame_timestamp?: Float;
}
/** Describes a photo to post as a story. */
export interface InputStoryContentPhoto {
    /** Type of the content, must be photo */
    type: "photo";
    /** The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    photo: String;
}
/** Describes a video to post as a story. */
export interface InputStoryContentVideo {
    /** Type of the content, must be video */
    type: "video";
    /** The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can't be reused and can only be uploaded as a new file, so you can pass “attach://<file_attach_name>” if the video was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    video: String;
    /** Optional. Precise duration of the video in seconds; 0-60 */
    duration?: Float;
    /** Optional. Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0. */
    cover_frame_timestamp?: Float;
    /** Optional. Pass True if the video has no sound */
    is_animation?: Boolean;
}
/** Use this method to send text messages. On success, the sent Message is returned. */
/** @see {@link sendMessageResult} for method output */
export interface sendMessageOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Text of the message to be sent, 1-4096 characters after entities parsing */
    text: String;
    /** Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: MessageEntity[];
    /** Link preview generation options for the message */
    link_preview_options?: LinkPreviewOptions;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned. */
/** @see {@link forwardMessageResult} for method output */
export interface forwardMessageOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
    from_chat_id: Integer | String;
    /** New start timestamp for the forwarded video in the message */
    video_start_timestamp?: Integer;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the forwarded message from forwarding and saving */
    protect_content?: Boolean;
    /** Message identifier in the chat specified in from_chat_id */
    message_id: Integer;
}
/** Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned. */
/** @see {@link forwardMessagesResult} for method output */
export interface forwardMessagesOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) */
    from_chat_id: Integer | String;
    /** A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order. */
    message_ids: Integer[];
    /** Sends the messages silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the forwarded messages from forwarding and saving */
    protect_content?: Boolean;
}
/** Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success. */
/** @see {@link copyMessageResult} for method output */
export interface copyMessageOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
    from_chat_id: Integer | String;
    /** Message identifier in the chat specified in from_chat_id */
    message_id: Integer;
    /** New start timestamp for the copied video in the message */
    video_start_timestamp?: Integer;
    /** New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept */
    caption?: String;
    /** Mode for parsing entities in the new caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified. */
    show_caption_above_media?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned. */
/** @see {@link copyMessagesResult} for method output */
export interface copyMessagesOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) */
    from_chat_id: Integer | String;
    /** A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order. */
    message_ids: Integer[];
    /** Sends the messages silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent messages from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to copy the messages without their captions */
    remove_caption?: Boolean;
}
/** Use this method to send photos. On success, the sent Message is returned. */
/** @see {@link sendPhotoResult} for method output */
export interface sendPhotoOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files » */
    photo: InputFile | String;
    /** Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Pass True if the photo needs to be covered with a spoiler animation */
    has_spoiler?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future. */
/** For sending voice messages, use the sendVoice method instead. */
/** @see {@link sendAudioResult} for method output */
export interface sendAudioOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
    audio: InputFile | String;
    /** Audio caption, 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Duration of the audio in seconds */
    duration?: Integer;
    /** Performer */
    performer?: String;
    /** Track name */
    title?: String;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | String;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future. */
/** @see {@link sendDocumentResult} for method output */
export interface sendDocumentOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
    document: InputFile | String;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | String;
    /** Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Disables automatic server-side content type detection for files uploaded using multipart/form-data */
    disable_content_type_detection?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future. */
/** @see {@link sendVideoResult} for method output */
export interface sendVideoOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files » */
    video: InputFile | String;
    /** Duration of sent video in seconds */
    duration?: Integer;
    /** Video width */
    width?: Integer;
    /** Video height */
    height?: Integer;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | String;
    /** Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    cover?: InputFile | String;
    /** Start timestamp for the video in the message */
    start_timestamp?: Integer;
    /** Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Pass True if the video needs to be covered with a spoiler animation */
    has_spoiler?: Boolean;
    /** Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future. */
/** @see {@link sendAnimationResult} for method output */
export interface sendAnimationOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files » */
    animation: InputFile | String;
    /** Duration of sent animation in seconds */
    duration?: Integer;
    /** Animation width */
    width?: Integer;
    /** Animation height */
    height?: Integer;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | String;
    /** Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Pass True if the animation needs to be covered with a spoiler animation */
    has_spoiler?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future. */
/** @see {@link sendVoiceResult} for method output */
export interface sendVoiceOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
    voice: InputFile | String;
    /** Voice message caption, 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Duration of the voice message in seconds */
    duration?: Integer;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned. */
/** @see {@link sendVideoNoteResult} for method output */
export interface sendVideoNoteOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported */
    video_note: InputFile | String;
    /** Duration of sent video in seconds */
    duration?: Integer;
    /** Video width and height, i.e. diameter of the video message */
    length?: Integer;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | String;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send paid media. On success, the sent Message is returned. */
/** @see {@link sendPaidMediaResult} for method output */
export interface sendPaidMediaOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. */
    chat_id: Integer | String;
    /** The number of Telegram Stars that must be paid to buy access to the media; 1-10000 */
    star_count: Integer;
    /** A JSON-serialized array describing the media to be sent; up to 10 items */
    media: InputPaidMedia[];
    /** Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes. */
    payload?: String;
    /** Media caption, 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the media caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned. */
/** @see {@link sendMediaGroupResult} for method output */
export interface sendMediaGroupOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** A JSON-serialized array describing messages to be sent, must include 2-10 items */
    media: InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo[];
    /** Sends messages silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent messages from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
}
/** Use this method to send point on the map. On success, the sent Message is returned. */
/** @see {@link sendLocationResult} for method output */
export interface sendLocationOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Latitude of the location */
    latitude: Float;
    /** Longitude of the location */
    longitude: Float;
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Float;
    /** Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
    live_period?: Integer;
    /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: Integer;
    /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: Integer;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send information about a venue. On success, the sent Message is returned. */
/** @see {@link sendVenueResult} for method output */
export interface sendVenueOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Latitude of the venue */
    latitude: Float;
    /** Longitude of the venue */
    longitude: Float;
    /** Name of the venue */
    title: String;
    /** Address of the venue */
    address: String;
    /** Foursquare identifier of the venue */
    foursquare_id?: String;
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: String;
    /** Google Places identifier of the venue */
    google_place_id?: String;
    /** Google Places type of the venue. (See supported types.) */
    google_place_type?: String;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send phone contacts. On success, the sent Message is returned. */
/** @see {@link sendContactResult} for method output */
export interface sendContactOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Contact's phone number */
    phone_number: String;
    /** Contact's first name */
    first_name: String;
    /** Contact's last name */
    last_name?: String;
    /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: String;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send a native poll. On success, the sent Message is returned. */
/** @see {@link sendPollResult} for method output */
export interface sendPollOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Poll question, 1-300 characters */
    question: String;
    /** Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed */
    question_parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode */
    question_entities?: MessageEntity[];
    /** A JSON-serialized list of 2-12 answer options */
    options: InputPollOption[];
    /** True, if the poll needs to be anonymous, defaults to True */
    is_anonymous?: Boolean;
    /** Poll type, “quiz” or “regular”, defaults to “regular” */
    type?: String;
    /** True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False */
    allows_multiple_answers?: Boolean;
    /** 0-based identifier of the correct answer option, required for polls in quiz mode */
    correct_option_id?: Integer;
    /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing */
    explanation?: String;
    /** Mode for parsing entities in the explanation. See formatting options for more details. */
    explanation_parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode */
    explanation_entities?: MessageEntity[];
    /** Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date. */
    open_period?: Integer;
    /** Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period. */
    close_date?: Integer;
    /** Pass True if the poll needs to be immediately closed. This can be useful for poll preview. */
    is_closed?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned. */
/** @see {@link sendChecklistResult} for method output */
export interface sendChecklistOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id: String;
    /** Unique identifier for the target chat */
    chat_id: Integer;
    /** A JSON-serialized object for the checklist to send */
    checklist: InputChecklist;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Unique identifier of the message effect to be added to the message */
    message_effect_id?: String;
    /** A JSON-serialized object for description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** A JSON-serialized object for an inline keyboard */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned. */
/** @see {@link sendDiceResult} for method output */
export interface sendDiceOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” */
    emoji?: String;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success. */
/** We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive. */
/** @see {@link sendChatActionResult} for method output */
export interface sendChatActionOptions {
    /** Unique identifier of the business connection on behalf of which the action will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread; for supergroups only */
    message_thread_id?: Integer;
    /** Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes. */
    action: String;
}
/** Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success. */
/** @see {@link setMessageReactionResult} for method output */
export interface setMessageReactionOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead. */
    message_id: Integer;
    /** A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots. */
    reaction?: ReactionType[];
    /** Pass True to set the reaction with a big animation */
    is_big?: Boolean;
}
/** Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object. */
/** @see {@link getUserProfilePhotosResult} for method output */
export interface getUserProfilePhotosOptions {
    /** Unique identifier of the target user */
    user_id: Integer;
    /** Sequential number of the first photo to be returned. By default, all photos are returned. */
    offset?: Integer;
    /** Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
    limit?: Integer;
}
/** Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success. */
/** @see {@link setUserEmojiStatusResult} for method output */
export interface setUserEmojiStatusOptions {
    /** Unique identifier of the target user */
    user_id: Integer;
    /** Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status. */
    emoji_status_custom_emoji_id?: String;
    /** Expiration date of the emoji status, if any */
    emoji_status_expiration_date?: Integer;
}
/** Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again. */
/** @see {@link getFileResult} for method output */
export interface getFileOptions {
    /** File identifier to get information about */
    file_id: String;
}
/** Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. */
/** @see {@link banChatMemberResult} for method output */
export interface banChatMemberOptions {
    /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
    /** Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. */
    until_date?: Integer;
    /** Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. */
    revoke_messages?: Boolean;
}
/** Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success. */
/** @see {@link unbanChatMemberResult} for method output */
export interface unbanChatMemberOptions {
    /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
    /** Do nothing if the user is not banned */
    only_if_banned?: Boolean;
}
/** Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success. */
/** @see {@link restrictChatMemberResult} for method output */
export interface restrictChatMemberOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
    /** A JSON-serialized object for new user permissions */
    permissions: ChatPermissions;
    /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
    use_independent_chat_permissions?: Boolean;
    /** Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
    until_date?: Integer;
}
/** Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success. */
/** @see {@link promoteChatMemberResult} for method output */
export interface promoteChatMemberOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
    /** Pass True if the administrator's presence in the chat is hidden */
    is_anonymous?: Boolean;
    /** Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege. */
    can_manage_chat?: Boolean;
    /** Pass True if the administrator can delete messages of other users */
    can_delete_messages?: Boolean;
    /** Pass True if the administrator can manage video chats */
    can_manage_video_chats?: Boolean;
    /** Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
    can_restrict_members?: Boolean;
    /** Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him) */
    can_promote_members?: Boolean;
    /** Pass True if the administrator can change chat title, photo and other settings */
    can_change_info?: Boolean;
    /** Pass True if the administrator can invite new users to the chat */
    can_invite_users?: Boolean;
    /** Pass True if the administrator can post stories to the chat */
    can_post_stories?: Boolean;
    /** Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
    can_edit_stories?: Boolean;
    /** Pass True if the administrator can delete stories posted by other users */
    can_delete_stories?: Boolean;
    /** Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only */
    can_post_messages?: Boolean;
    /** Pass True if the administrator can edit messages of other users and can pin messages; for channels only */
    can_edit_messages?: Boolean;
    /** Pass True if the administrator can pin messages; for supergroups only */
    can_pin_messages?: Boolean;
    /** Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
    can_manage_topics?: Boolean;
}
/** Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success. */
/** @see {@link setChatAdministratorCustomTitleResult} for method output */
export interface setChatAdministratorCustomTitleOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
    /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
    custom_title: String;
}
/** Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success. */
/** @see {@link banChatSenderChatResult} for method output */
export interface banChatSenderChatOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target sender chat */
    sender_chat_id: Integer;
}
/** Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success. */
/** @see {@link unbanChatSenderChatResult} for method output */
export interface unbanChatSenderChatOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target sender chat */
    sender_chat_id: Integer;
}
/** Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success. */
/** @see {@link setChatPermissionsResult} for method output */
export interface setChatPermissionsOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** A JSON-serialized object for new default chat permissions */
    permissions: ChatPermissions;
    /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
    use_independent_chat_permissions?: Boolean;
}
/** Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success. */
/** @see {@link exportChatInviteLinkResult} for method output */
export interface exportChatInviteLinkOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object. */
/** @see {@link createChatInviteLinkResult} for method output */
export interface createChatInviteLinkOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Invite link name; 0-32 characters */
    name?: String;
    /** Point in time (Unix timestamp) when the link will expire */
    expire_date?: Integer;
    /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: Integer;
    /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
    creates_join_request?: Boolean;
}
/** Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object. */
/** @see {@link editChatInviteLinkResult} for method output */
export interface editChatInviteLinkOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** The invite link to edit */
    invite_link: String;
    /** Invite link name; 0-32 characters */
    name?: String;
    /** Point in time (Unix timestamp) when the link will expire */
    expire_date?: Integer;
    /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: Integer;
    /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
    creates_join_request?: Boolean;
}
/** Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object. */
/** @see {@link createChatSubscriptionInviteLinkResult} for method output */
export interface createChatSubscriptionInviteLinkOptions {
    /** Unique identifier for the target channel chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Invite link name; 0-32 characters */
    name?: String;
    /** The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days). */
    subscription_period: Integer;
    /** The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000 */
    subscription_price: Integer;
}
/** Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object. */
/** @see {@link editChatSubscriptionInviteLinkResult} for method output */
export interface editChatSubscriptionInviteLinkOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** The invite link to edit */
    invite_link: String;
    /** Invite link name; 0-32 characters */
    name?: String;
}
/** Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object. */
/** @see {@link revokeChatInviteLinkResult} for method output */
export interface revokeChatInviteLinkOptions {
    /** Unique identifier of the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** The invite link to revoke */
    invite_link: String;
}
/** Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success. */
/** @see {@link approveChatJoinRequestResult} for method output */
export interface approveChatJoinRequestOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
}
/** Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success. */
/** @see {@link declineChatJoinRequestResult} for method output */
export interface declineChatJoinRequestOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
}
/** Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. */
/** @see {@link setChatPhotoResult} for method output */
export interface setChatPhotoOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** New chat photo, uploaded using multipart/form-data */
    photo: InputFile;
}
/** Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. */
/** @see {@link deleteChatPhotoResult} for method output */
export interface deleteChatPhotoOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. */
/** @see {@link setChatTitleResult} for method output */
export interface setChatTitleOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** New chat title, 1-128 characters */
    title: String;
}
/** Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. */
/** @see {@link setChatDescriptionResult} for method output */
export interface setChatDescriptionOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** New chat description, 0-255 characters */
    description?: String;
}
/** Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success. */
/** @see {@link pinChatMessageResult} for method output */
export interface pinChatMessageOptions {
    /** Unique identifier of the business connection on behalf of which the message will be pinned */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Identifier of a message to pin */
    message_id: Integer;
    /** Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. */
    disable_notification?: Boolean;
}
/** Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success. */
/** @see {@link unpinChatMessageResult} for method output */
export interface unpinChatMessageOptions {
    /** Unique identifier of the business connection on behalf of which the message will be unpinned */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned. */
    message_id?: Integer;
}
/** Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success. */
/** @see {@link unpinAllChatMessagesResult} for method output */
export interface unpinAllChatMessagesOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Use this method for your bot to leave a group, supergroup or channel. Returns True on success. */
/** @see {@link leaveChatResult} for method output */
export interface leaveChatOptions {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success. */
/** @see {@link getChatResult} for method output */
export interface getChatOptions {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects. */
/** @see {@link getChatAdministratorsResult} for method output */
export interface getChatAdministratorsOptions {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Use this method to get the number of members in a chat. Returns Int on success. */
/** @see {@link getChatMemberCountResult} for method output */
export interface getChatMemberCountOptions {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success. */
/** @see {@link getChatMemberResult} for method output */
export interface getChatMemberOptions {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
}
/** Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success. */
/** @see {@link setChatStickerSetResult} for method output */
export interface setChatStickerSetOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Name of the sticker set to be set as the group sticker set */
    sticker_set_name: String;
}
/** Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success. */
/** @see {@link deleteChatStickerSetResult} for method output */
export interface deleteChatStickerSetOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object. */
/** @see {@link createForumTopicResult} for method output */
export interface createForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Topic name, 1-128 characters */
    name: String;
    /** Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F) */
    icon_color?: Integer;
    /** Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. */
    icon_custom_emoji_id?: String;
}
/** Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success. */
/** @see {@link editForumTopicResult} for method output */
export interface editForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: Integer;
    /** New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept */
    name?: String;
    /** New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept */
    icon_custom_emoji_id?: String;
}
/** Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success. */
/** @see {@link closeForumTopicResult} for method output */
export interface closeForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: Integer;
}
/** Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success. */
/** @see {@link reopenForumTopicResult} for method output */
export interface reopenForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: Integer;
}
/** Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success. */
/** @see {@link deleteForumTopicResult} for method output */
export interface deleteForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: Integer;
}
/** Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success. */
/** @see {@link unpinAllForumTopicMessagesResult} for method output */
export interface unpinAllForumTopicMessagesOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: Integer;
}
/** Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success. */
/** @see {@link editGeneralForumTopicResult} for method output */
export interface editGeneralForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
    /** New topic name, 1-128 characters */
    name: String;
}
/** Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success. */
/** @see {@link closeGeneralForumTopicResult} for method output */
export interface closeGeneralForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success. */
/** @see {@link reopenGeneralForumTopicResult} for method output */
export interface reopenGeneralForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success. */
/** @see {@link hideGeneralForumTopicResult} for method output */
export interface hideGeneralForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success. */
/** @see {@link unhideGeneralForumTopicResult} for method output */
export interface unhideGeneralForumTopicOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success. */
/** @see {@link unpinAllGeneralForumTopicMessagesResult} for method output */
export interface unpinAllGeneralForumTopicMessagesOptions {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Integer | String;
}
/** Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned. */
/** @see {@link answerCallbackQueryResult} for method output */
export interface answerCallbackQueryOptions {
    /** Unique identifier for the query to be answered */
    callback_query_id: String;
    /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
    text?: String;
    /** If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. */
    show_alert?: Boolean;
    /**
     * URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.
     *
     * Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
     */
    url?: String;
    /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
    cache_time?: Integer;
}
/** Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object. */
/** @see {@link getUserChatBoostsResult} for method output */
export interface getUserChatBoostsOptions {
    /** Unique identifier for the chat or username of the channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier of the target user */
    user_id: Integer;
}
/** Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success. */
/** @see {@link getBusinessConnectionResult} for method output */
export interface getBusinessConnectionOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
}
/** Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success. */
/** @see {@link setMyCommandsResult} for method output */
export interface setMyCommandsOptions {
    /** A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. */
    commands: BotCommand[];
    /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
    scope?: BotCommandScope;
    /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
    language_code?: String;
}
/** Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success. */
/** @see {@link deleteMyCommandsResult} for method output */
export interface deleteMyCommandsOptions {
    /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
    scope?: BotCommandScope;
    /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
    language_code?: String;
}
/** Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned. */
/** @see {@link getMyCommandsResult} for method output */
export interface getMyCommandsOptions {
    /** A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. */
    scope?: BotCommandScope;
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: String;
}
/** Use this method to change the bot's name. Returns True on success. */
/** @see {@link setMyNameResult} for method output */
export interface setMyNameOptions {
    /** New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language. */
    name?: String;
    /** A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name. */
    language_code?: String;
}
/** Use this method to get the current bot name for the given user language. Returns BotName on success. */
/** @see {@link getMyNameResult} for method output */
export interface getMyNameOptions {
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: String;
}
/** Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success. */
/** @see {@link setMyDescriptionResult} for method output */
export interface setMyDescriptionOptions {
    /** New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language. */
    description?: String;
    /** A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description. */
    language_code?: String;
}
/** Use this method to get the current bot description for the given user language. Returns BotDescription on success. */
/** @see {@link getMyDescriptionResult} for method output */
export interface getMyDescriptionOptions {
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: String;
}
/** Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success. */
/** @see {@link setMyShortDescriptionResult} for method output */
export interface setMyShortDescriptionOptions {
    /** New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language. */
    short_description?: String;
    /** A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description. */
    language_code?: String;
}
/** Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success. */
/** @see {@link getMyShortDescriptionResult} for method output */
export interface getMyShortDescriptionOptions {
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: String;
}
/** Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success. */
/** @see {@link setChatMenuButtonResult} for method output */
export interface setChatMenuButtonOptions {
    /** Unique identifier for the target private chat. If not specified, default bot's menu button will be changed */
    chat_id?: Integer;
    /** A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault */
    menu_button?: MenuButton;
}
/** Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success. */
/** @see {@link getChatMenuButtonResult} for method output */
export interface getChatMenuButtonOptions {
    /** Unique identifier for the target private chat. If not specified, default bot's menu button will be returned */
    chat_id?: Integer;
}
/** Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success. */
/** @see {@link setMyDefaultAdministratorRightsResult} for method output */
export interface setMyDefaultAdministratorRightsOptions {
    /** A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared. */
    rights?: ChatAdministratorRights;
    /** Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed. */
    for_channels?: Boolean;
}
/** Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success. */
/** @see {@link getMyDefaultAdministratorRightsResult} for method output */
export interface getMyDefaultAdministratorRightsOptions {
    /** Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. */
    for_channels?: Boolean;
}
/** Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. */
/** @see {@link editMessageTextResult} for method output */
export interface editMessageTextOptions {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: String;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: Integer | String;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
    /** New text of the message, 1-4096 characters after entities parsing */
    text: String;
    /** Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: MessageEntity[];
    /** Link preview generation options for the message */
    link_preview_options?: LinkPreviewOptions;
    /** A JSON-serialized object for an inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. */
/** @see {@link editMessageCaptionResult} for method output */
export interface editMessageCaptionOptions {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: String;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: Integer | String;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
    /** New caption of the message, 0-1024 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the message caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages. */
    show_caption_above_media?: Boolean;
    /** A JSON-serialized object for an inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. */
/** @see {@link editMessageMediaResult} for method output */
export interface editMessageMediaOptions {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: String;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: Integer | String;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
    /** A JSON-serialized object for a new media content of the message */
    media: InputMedia;
    /** A JSON-serialized object for a new inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. */
/** @see {@link editMessageLiveLocationResult} for method output */
export interface editMessageLiveLocationOptions {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: String;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: Integer | String;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
    /** Latitude of new location */
    latitude: Float;
    /** Longitude of new location */
    longitude: Float;
    /** New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged */
    live_period?: Integer;
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Float;
    /** Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: Integer;
    /** The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: Integer;
    /** A JSON-serialized object for a new inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned. */
/** @see {@link stopMessageLiveLocationResult} for method output */
export interface stopMessageLiveLocationOptions {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: String;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: Integer | String;
    /** Required if inline_message_id is not specified. Identifier of the message with live location to stop */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
    /** A JSON-serialized object for a new inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned. */
/** @see {@link editMessageChecklistResult} for method output */
export interface editMessageChecklistOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id: String;
    /** Unique identifier for the target chat */
    chat_id: Integer;
    /** Unique identifier for the target message */
    message_id: Integer;
    /** A JSON-serialized object for the new checklist */
    checklist: InputChecklist;
    /** A JSON-serialized object for the new inline keyboard for the message */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. */
/** @see {@link editMessageReplyMarkupResult} for method output */
export interface editMessageReplyMarkupOptions {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: String;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: Integer | String;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
    /** A JSON-serialized object for an inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned. */
/** @see {@link stopPollResult} for method output */
export interface stopPollOptions {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Identifier of the original message with the poll */
    message_id: Integer;
    /** A JSON-serialized object for a new message inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}
/**
 * Use this method to delete a message, including service messages, with the following limitations:
 * - A message can only be deleted if it was sent less than 48 hours ago.
 * - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
 * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
 * - Bots can delete outgoing messages in private chats, groups, and supergroups.
 * - Bots can delete incoming messages in private chats.
 * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
 * - If the bot is an administrator of a group, it can delete any message there.
 * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
 * Returns True on success.
 */
/** @see {@link deleteMessageResult} for method output */
export interface deleteMessageOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Identifier of the message to delete */
    message_id: Integer;
}
/** Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success. */
/** @see {@link deleteMessagesResult} for method output */
export interface deleteMessagesOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted */
    message_ids: Integer[];
}
/** Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns True on success. */
/** @see {@link sendGiftResult} for method output */
export interface sendGiftOptions {
    /** Required if chat_id is not specified. Unique identifier of the target user who will receive the gift. */
    user_id?: Integer;
    /** Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. */
    chat_id?: Integer | String;
    /** Identifier of the gift */
    gift_id: String;
    /** Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver */
    pay_for_upgrade?: Boolean;
    /** Text that will be shown along with the gift; 0-128 characters */
    text?: String;
    /** Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored. */
    text_parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored. */
    text_entities?: MessageEntity[];
}
/** Gifts a Telegram Premium subscription to the given user. Returns True on success. */
/** @see {@link giftPremiumSubscriptionResult} for method output */
export interface giftPremiumSubscriptionOptions {
    /** Unique identifier of the target user who will receive a Telegram Premium subscription */
    user_id: Integer;
    /** Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12 */
    month_count: Integer;
    /** Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months */
    star_count: Integer;
    /** Text that will be shown along with the service message about the subscription; 0-128 characters */
    text?: String;
    /** Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored. */
    text_parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored. */
    text_entities?: MessageEntity[];
}
/** Verifies a user on behalf of the organization which is represented by the bot. Returns True on success. */
/** @see {@link verifyUserResult} for method output */
export interface verifyUserOptions {
    /** Unique identifier of the target user */
    user_id: Integer;
    /** Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description. */
    custom_description?: String;
}
/** Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success. */
/** @see {@link verifyChatResult} for method output */
export interface verifyChatOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description. */
    custom_description?: String;
}
/** Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success. */
/** @see {@link removeUserVerificationResult} for method output */
export interface removeUserVerificationOptions {
    /** Unique identifier of the target user */
    user_id: Integer;
}
/** Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success. */
/** @see {@link removeChatVerificationResult} for method output */
export interface removeChatVerificationOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
}
/** Marks incoming message as read on behalf of a business account. Requires the can_read_messages business bot right. Returns True on success. */
/** @see {@link readBusinessMessageResult} for method output */
export interface readBusinessMessageOptions {
    /** Unique identifier of the business connection on behalf of which to read the message */
    business_connection_id: String;
    /** Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours. */
    chat_id: Integer;
    /** Unique identifier of the message to mark as read */
    message_id: Integer;
}
/** Delete messages on behalf of a business account. Requires the can_delete_sent_messages business bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot right to delete any message. Returns True on success. */
/** @see {@link deleteBusinessMessagesResult} for method output */
export interface deleteBusinessMessagesOptions {
    /** Unique identifier of the business connection on behalf of which to delete the messages */
    business_connection_id: String;
    /** A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted */
    message_ids: Integer[];
}
/** Changes the first and last name of a managed business account. Requires the can_change_name business bot right. Returns True on success. */
/** @see {@link setBusinessAccountNameResult} for method output */
export interface setBusinessAccountNameOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** The new value of the first name for the business account; 1-64 characters */
    first_name: String;
    /** The new value of the last name for the business account; 0-64 characters */
    last_name?: String;
}
/** Changes the username of a managed business account. Requires the can_change_username business bot right. Returns True on success. */
/** @see {@link setBusinessAccountUsernameResult} for method output */
export interface setBusinessAccountUsernameOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** The new value of the username for the business account; 0-32 characters */
    username?: String;
}
/** Changes the bio of a managed business account. Requires the can_change_bio business bot right. Returns True on success. */
/** @see {@link setBusinessAccountBioResult} for method output */
export interface setBusinessAccountBioOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** The new value of the bio for the business account; 0-140 characters */
    bio?: String;
}
/** Changes the profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success. */
/** @see {@link setBusinessAccountProfilePhotoResult} for method output */
export interface setBusinessAccountProfilePhotoOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** The new profile photo to set */
    photo: InputProfilePhoto;
    /** Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo. */
    is_public?: Boolean;
}
/** Removes the current profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success. */
/** @see {@link removeBusinessAccountProfilePhotoResult} for method output */
export interface removeBusinessAccountProfilePhotoOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo. */
    is_public?: Boolean;
}
/** Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can_change_gift_settings business bot right. Returns True on success. */
/** @see {@link setBusinessAccountGiftSettingsResult} for method output */
export interface setBusinessAccountGiftSettingsOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field */
    show_gift_button: Boolean;
    /** Types of gifts accepted by the business account */
    accepted_gift_types: AcceptedGiftTypes;
}
/** Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns StarAmount on success. */
/** @see {@link getBusinessAccountStarBalanceResult} for method output */
export interface getBusinessAccountStarBalanceOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
}
/** Transfers Telegram Stars from the business account balance to the bot's balance. Requires the can_transfer_stars business bot right. Returns True on success. */
/** @see {@link transferBusinessAccountStarsResult} for method output */
export interface transferBusinessAccountStarsOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Number of Telegram Stars to transfer; 1-10000 */
    star_count: Integer;
}
/** Returns the gifts received and owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns OwnedGifts on success. */
/** @see {@link getBusinessAccountGiftsResult} for method output */
export interface getBusinessAccountGiftsOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Pass True to exclude gifts that aren't saved to the account's profile page */
    exclude_unsaved?: Boolean;
    /** Pass True to exclude gifts that are saved to the account's profile page */
    exclude_saved?: Boolean;
    /** Pass True to exclude gifts that can be purchased an unlimited number of times */
    exclude_unlimited?: Boolean;
    /** Pass True to exclude gifts that can be purchased a limited number of times */
    exclude_limited?: Boolean;
    /** Pass True to exclude unique gifts */
    exclude_unique?: Boolean;
    /** Pass True to sort results by gift price instead of send date. Sorting is applied before pagination. */
    sort_by_price?: Boolean;
    /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
    offset?: String;
    /** The maximum number of gifts to be returned; 1-100. Defaults to 100 */
    limit?: Integer;
}
/** Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business bot right. Returns True on success. */
/** @see {@link convertGiftToStarsResult} for method output */
export interface convertGiftToStarsOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Unique identifier of the regular gift that should be converted to Telegram Stars */
    owned_gift_id: String;
}
/** Upgrades a given regular gift to a unique gift. Requires the can_transfer_and_upgrade_gifts business bot right. Additionally requires the can_transfer_stars business bot right if the upgrade is paid. Returns True on success. */
/** @see {@link upgradeGiftResult} for method output */
export interface upgradeGiftOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Unique identifier of the regular gift that should be upgraded to a unique one */
    owned_gift_id: String;
    /** Pass True to keep the original gift text, sender and receiver in the upgraded gift */
    keep_original_details?: Boolean;
    /** The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid_upgrade_star_count > 0, then pass 0, otherwise, the can_transfer_stars business bot right is required and gift.upgrade_star_count must be passed. */
    star_count?: Integer;
}
/** Transfers an owned unique gift to another user. Requires the can_transfer_and_upgrade_gifts business bot right. Requires can_transfer_stars business bot right if the transfer is paid. Returns True on success. */
/** @see {@link transferGiftResult} for method output */
export interface transferGiftOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Unique identifier of the regular gift that should be transferred */
    owned_gift_id: String;
    /** Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours. */
    new_owner_chat_id: Integer;
    /** The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can_transfer_stars business bot right is required. */
    star_count?: Integer;
}
/** Posts a story on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success. */
/** @see {@link postStoryResult} for method output */
export interface postStoryOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Content of the story */
    content: InputStoryContent;
    /** Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400 */
    active_period: Integer;
    /** Caption of the story, 0-2048 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the story caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** A JSON-serialized list of clickable areas to be shown on the story */
    areas?: StoryArea[];
    /** Pass True to keep the story accessible after it expires */
    post_to_chat_page?: Boolean;
    /** Pass True if the content of the story must be protected from forwarding and screenshotting */
    protect_content?: Boolean;
}
/** Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success. */
/** @see {@link editStoryResult} for method output */
export interface editStoryOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Unique identifier of the story to edit */
    story_id: Integer;
    /** Content of the story */
    content: InputStoryContent;
    /** Caption of the story, 0-2048 characters after entities parsing */
    caption?: String;
    /** Mode for parsing entities in the story caption. See formatting options for more details. */
    parse_mode?: String;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** A JSON-serialized list of clickable areas to be shown on the story */
    areas?: StoryArea[];
}
/** Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns True on success. */
/** @see {@link deleteStoryResult} for method output */
export interface deleteStoryOptions {
    /** Unique identifier of the business connection */
    business_connection_id: String;
    /** Unique identifier of the story to delete */
    story_id: Integer;
}
/** This object represents a sticker. */
export interface Sticker {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
    type: String;
    /** Sticker width */
    width: Integer;
    /** Sticker height */
    height: Integer;
    /** True, if the sticker is animated */
    is_animated: Boolean;
    /** True, if the sticker is a video sticker */
    is_video: Boolean;
    /** Optional. Sticker thumbnail in the .WEBP or .JPG format */
    thumbnail?: PhotoSize;
    /** Optional. Emoji associated with the sticker */
    emoji?: String;
    /** Optional. Name of the sticker set to which the sticker belongs */
    set_name?: String;
    /** Optional. For premium regular stickers, premium animation for the sticker */
    premium_animation?: File;
    /** Optional. For mask stickers, the position where the mask should be placed */
    mask_position?: MaskPosition;
    /** Optional. For custom emoji stickers, unique identifier of the custom emoji */
    custom_emoji_id?: String;
    /** Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
    needs_repainting?: True;
    /** Optional. File size in bytes */
    file_size?: Integer;
}
/** This object represents a sticker set. */
export interface StickerSet {
    /** Sticker set name */
    name: String;
    /** Sticker set title */
    title: String;
    /** Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji” */
    sticker_type: String;
    /** List of all set stickers */
    stickers: Sticker[];
    /** Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
    thumbnail?: PhotoSize;
}
/** This object describes the position on faces where a mask should be placed by default. */
export interface MaskPosition {
    /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    point: String;
    /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: Float;
    /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: Float;
    /** Mask scaling coefficient. For example, 2.0 means double size. */
    scale: Float;
}
/** This object describes a sticker to be added to a sticker set. */
export interface InputSticker {
    /** The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new file using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files » */
    sticker: String;
    /** Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a .WEBM video */
    format: String;
    /** List of 1-20 emoji associated with the sticker */
    emoji_list: String[];
    /** Optional. Position where the mask should be placed on faces. For “mask” stickers only. */
    mask_position?: MaskPosition;
    /** Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only. */
    keywords?: String[];
}
/** Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned. */
/** @see {@link sendStickerResult} for method output */
export interface sendStickerOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL. */
    sticker: InputFile | String;
    /** Emoji associated with the sticker; only for just uploaded stickers */
    emoji?: String;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}
/** Use this method to get a sticker set. On success, a StickerSet object is returned. */
/** @see {@link getStickerSetResult} for method output */
export interface getStickerSetOptions {
    /** Name of the sticker set */
    name: String;
}
/** Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects. */
/** @see {@link getCustomEmojiStickersResult} for method output */
export interface getCustomEmojiStickersOptions {
    /** A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. */
    custom_emoji_ids: String[];
}
/** Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success. */
/** @see {@link uploadStickerFileResult} for method output */
export interface uploadStickerFileOptions {
    /** User identifier of sticker file owner */
    user_id: Integer;
    /** A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files » */
    sticker: InputFile;
    /** Format of the sticker, must be one of “static”, “animated”, “video” */
    sticker_format: String;
}
/** Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success. */
/** @see {@link createNewStickerSetResult} for method output */
export interface createNewStickerSetOptions {
    /** User identifier of created sticker set owner */
    user_id: Integer;
    /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters. */
    name: String;
    /** Sticker set title, 1-64 characters */
    title: String;
    /** A JSON-serialized list of 1-50 initial stickers to be added to the sticker set */
    stickers: InputSticker[];
    /** Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created. */
    sticker_type?: String;
    /** Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only */
    needs_repainting?: Boolean;
}
/** Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success. */
/** @see {@link addStickerToSetResult} for method output */
export interface addStickerToSetOptions {
    /** User identifier of sticker set owner */
    user_id: Integer;
    /** Sticker set name */
    name: String;
    /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. */
    sticker: InputSticker;
}
/** Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success. */
/** @see {@link setStickerPositionInSetResult} for method output */
export interface setStickerPositionInSetOptions {
    /** File identifier of the sticker */
    sticker: String;
    /** New sticker position in the set, zero-based */
    position: Integer;
}
/** Use this method to delete a sticker from a set created by the bot. Returns True on success. */
/** @see {@link deleteStickerFromSetResult} for method output */
export interface deleteStickerFromSetOptions {
    /** File identifier of the sticker */
    sticker: String;
}
/** Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success. */
/** @see {@link replaceStickerInSetResult} for method output */
export interface replaceStickerInSetOptions {
    /** User identifier of the sticker set owner */
    user_id: Integer;
    /** Sticker set name */
    name: String;
    /** File identifier of the replaced sticker */
    old_sticker: String;
    /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged. */
    sticker: InputSticker;
}
/** Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success. */
/** @see {@link setStickerEmojiListResult} for method output */
export interface setStickerEmojiListOptions {
    /** File identifier of the sticker */
    sticker: String;
    /** A JSON-serialized list of 1-20 emoji associated with the sticker */
    emoji_list: String[];
}
/** Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success. */
/** @see {@link setStickerKeywordsResult} for method output */
export interface setStickerKeywordsOptions {
    /** File identifier of the sticker */
    sticker: String;
    /** A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters */
    keywords?: String[];
}
/** Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success. */
/** @see {@link setStickerMaskPositionResult} for method output */
export interface setStickerMaskPositionOptions {
    /** File identifier of the sticker */
    sticker: String;
    /** A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. */
    mask_position?: MaskPosition;
}
/** Use this method to set the title of a created sticker set. Returns True on success. */
/** @see {@link setStickerSetTitleResult} for method output */
export interface setStickerSetTitleOptions {
    /** Sticker set name */
    name: String;
    /** Sticker set title, 1-64 characters */
    title: String;
}
/** Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success. */
/** @see {@link setStickerSetThumbnailResult} for method output */
export interface setStickerSetThumbnailOptions {
    /** Sticker set name */
    name: String;
    /** User identifier of the sticker set owner */
    user_id: Integer;
    /** A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. */
    thumbnail?: InputFile | String;
    /** Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a .WEBM video */
    format: String;
}
/** Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success. */
/** @see {@link setCustomEmojiStickerSetThumbnailResult} for method output */
export interface setCustomEmojiStickerSetThumbnailOptions {
    /** Sticker set name */
    name: String;
    /** Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail. */
    custom_emoji_id?: String;
}
/** Use this method to delete a sticker set that was created by the bot. Returns True on success. */
/** @see {@link deleteStickerSetResult} for method output */
export interface deleteStickerSetOptions {
    /** Sticker set name */
    name: String;
}
/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
export interface InlineQuery {
    /** Unique identifier for this query */
    id: String;
    /** Sender */
    from: User;
    /** Text of the query (up to 256 characters) */
    query: String;
    /** Offset of the results to be returned, can be controlled by the bot */
    offset: String;
    /** Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
    chat_type?: String;
    /** Optional. Sender location, only for bots that request user location */
    location?: Location;
}
/**
 * Use this method to send answers to an inline query. On success, True is returned.
 * No more than 50 results per query are allowed.
 */
/** @see {@link answerInlineQueryResult} for method output */
export interface answerInlineQueryOptions {
    /** Unique identifier for the answered query */
    inline_query_id: String;
    /** A JSON-serialized array of results for the inline query */
    results: InlineQueryResult[];
    /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
    cache_time?: Integer;
    /** Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. */
    is_personal?: Boolean;
    /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
    next_offset?: String;
    /** A JSON-serialized object describing a button to be shown above inline query results */
    button?: InlineQueryResultsButton;
}
/** This object represents a button to be shown above inline query results. You must use exactly one of the optional fields. */
export interface InlineQueryResultsButton {
    /** Label text on the button */
    text: String;
    /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App. */
    web_app?: WebAppInfo;
    /**
     * Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
     *
     * Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
     */
    start_parameter?: String;
}
/** Represents a link to an article or web page. */
export interface InlineQueryResultArticle {
    /** Type of the result, must be article */
    type: "article";
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Title of the result */
    title: String;
    /** Content of the message to be sent */
    input_message_content: InputMessageContent;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. URL of the result */
    url?: String;
    /** Optional. Short description of the result */
    description?: String;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: String;
    /** Optional. Thumbnail width */
    thumbnail_width?: Integer;
    /** Optional. Thumbnail height */
    thumbnail_height?: Integer;
}
/** Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo. */
export interface InlineQueryResultPhoto {
    /** Type of the result, must be photo */
    type: "photo";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB */
    photo_url: String;
    /** URL of the thumbnail for the photo */
    thumbnail_url: String;
    /** Optional. Width of the photo */
    photo_width?: Integer;
    /** Optional. Height of the photo */
    photo_height?: Integer;
    /** Optional. Title for the result */
    title?: String;
    /** Optional. Short description of the result */
    description?: String;
    /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent;
}
/** Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation. */
export interface InlineQueryResultGif {
    /** Type of the result, must be gif */
    type: "gif";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the GIF file */
    gif_url: String;
    /** Optional. Width of the GIF */
    gif_width?: Integer;
    /** Optional. Height of the GIF */
    gif_height?: Integer;
    /** Optional. Duration of the GIF in seconds */
    gif_duration?: Integer;
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: String;
    /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumbnail_mime_type?: String;
    /** Optional. Title for the result */
    title?: String;
    /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation. */
export interface InlineQueryResultMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: "mpeg4_gif";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the MPEG4 file */
    mpeg4_url: String;
    /** Optional. Video width */
    mpeg4_width?: Integer;
    /** Optional. Video height */
    mpeg4_height?: Integer;
    /** Optional. Video duration in seconds */
    mpeg4_duration?: Integer;
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: String;
    /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumbnail_mime_type?: String;
    /** Optional. Title for the result */
    title?: String;
    /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video. */
export interface InlineQueryResultVideo {
    /** Type of the result, must be video */
    type: "video";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the embedded video player or video file */
    video_url: String;
    /** MIME type of the content of the video URL, “text/html” or “video/mp4” */
    mime_type: String;
    /** URL of the thumbnail (JPEG only) for the video */
    thumbnail_url: String;
    /** Title for the result */
    title: String;
    /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Video width */
    video_width?: Integer;
    /** Optional. Video height */
    video_height?: Integer;
    /** Optional. Video duration in seconds */
    video_duration?: Integer;
    /** Optional. Short description of the result */
    description?: String;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
    input_message_content?: InputMessageContent;
}
/** Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio. */
export interface InlineQueryResultAudio {
    /** Type of the result, must be audio */
    type: "audio";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the audio file */
    audio_url: String;
    /** Title */
    title: String;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Performer */
    performer?: String;
    /** Optional. Audio duration in seconds */
    audio_duration?: Integer;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message. */
export interface InlineQueryResultVoice {
    /** Type of the result, must be voice */
    type: "voice";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid URL for the voice recording */
    voice_url: String;
    /** Recording title */
    title: String;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Recording duration in seconds */
    voice_duration?: Integer;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the voice recording */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method. */
export interface InlineQueryResultDocument {
    /** Type of the result, must be document */
    type: "document";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** Title for the result */
    title: String;
    /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** A valid URL for the file */
    document_url: String;
    /** MIME type of the content of the file, either “application/pdf” or “application/zip” */
    mime_type: String;
    /** Optional. Short description of the result */
    description?: String;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent;
    /** Optional. URL of the thumbnail (JPEG only) for the file */
    thumbnail_url?: String;
    /** Optional. Thumbnail width */
    thumbnail_width?: Integer;
    /** Optional. Thumbnail height */
    thumbnail_height?: Integer;
}
/** Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location. */
export interface InlineQueryResultLocation {
    /** Type of the result, must be location */
    type: "location";
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Location latitude in degrees */
    latitude: Float;
    /** Location longitude in degrees */
    longitude: Float;
    /** Location title */
    title: String;
    /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Float;
    /** Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
    live_period?: Integer;
    /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: Integer;
    /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: Integer;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the location */
    input_message_content?: InputMessageContent;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: String;
    /** Optional. Thumbnail width */
    thumbnail_width?: Integer;
    /** Optional. Thumbnail height */
    thumbnail_height?: Integer;
}
/** Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue. */
export interface InlineQueryResultVenue {
    /** Type of the result, must be venue */
    type: "venue";
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Latitude of the venue location in degrees */
    latitude: Float;
    /** Longitude of the venue location in degrees */
    longitude: Float;
    /** Title of the venue */
    title: String;
    /** Address of the venue */
    address: String;
    /** Optional. Foursquare identifier of the venue if known */
    foursquare_id?: String;
    /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: String;
    /** Optional. Google Places identifier of the venue */
    google_place_id?: String;
    /** Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: String;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the venue */
    input_message_content?: InputMessageContent;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: String;
    /** Optional. Thumbnail width */
    thumbnail_width?: Integer;
    /** Optional. Thumbnail height */
    thumbnail_height?: Integer;
}
/** Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact. */
export interface InlineQueryResultContact {
    /** Type of the result, must be contact */
    type: "contact";
    /** Unique identifier for this result, 1-64 Bytes */
    id: String;
    /** Contact's phone number */
    phone_number: String;
    /** Contact's first name */
    first_name: String;
    /** Optional. Contact's last name */
    last_name?: String;
    /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: String;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the contact */
    input_message_content?: InputMessageContent;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: String;
    /** Optional. Thumbnail width */
    thumbnail_width?: Integer;
    /** Optional. Thumbnail height */
    thumbnail_height?: Integer;
}
/** Represents a Game. */
export interface InlineQueryResultGame {
    /** Type of the result, must be game */
    type: "game";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** Short name of the game */
    game_short_name: String;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
}
/** Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo. */
export interface InlineQueryResultCachedPhoto {
    /** Type of the result, must be photo */
    type: "photo";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier of the photo */
    photo_file_id: String;
    /** Optional. Title for the result */
    title?: String;
    /** Optional. Short description of the result */
    description?: String;
    /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent;
}
/** Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation. */
export interface InlineQueryResultCachedGif {
    /** Type of the result, must be gif */
    type: "gif";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier for the GIF file */
    gif_file_id: String;
    /** Optional. Title for the result */
    title?: String;
    /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation. */
export interface InlineQueryResultCachedMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: "mpeg4_gif";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier for the MPEG4 file */
    mpeg4_file_id: String;
    /** Optional. Title for the result */
    title?: String;
    /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker. */
export interface InlineQueryResultCachedSticker {
    /** Type of the result, must be sticker */
    type: "sticker";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier of the sticker */
    sticker_file_id: String;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the sticker */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. */
export interface InlineQueryResultCachedDocument {
    /** Type of the result, must be document */
    type: "document";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** Title for the result */
    title: String;
    /** A valid file identifier for the file */
    document_file_id: String;
    /** Optional. Short description of the result */
    description?: String;
    /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video. */
export interface InlineQueryResultCachedVideo {
    /** Type of the result, must be video */
    type: "video";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier for the video file */
    video_file_id: String;
    /** Title for the result */
    title: String;
    /** Optional. Short description of the result */
    description?: String;
    /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: Boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video */
    input_message_content?: InputMessageContent;
}
/** Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message. */
export interface InlineQueryResultCachedVoice {
    /** Type of the result, must be voice */
    type: "voice";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier for the voice message */
    voice_file_id: String;
    /** Voice message title */
    title: String;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the voice message */
    input_message_content?: InputMessageContent;
}
/** Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio. */
export interface InlineQueryResultCachedAudio {
    /** Type of the result, must be audio */
    type: "audio";
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier for the audio file */
    audio_file_id: String;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: String;
    /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: MessageEntity[];
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent;
}
/** Represents the content of a text message to be sent as the result of an inline query. */
export interface InputTextMessageContent {
    /** Text of the message to be sent, 1-4096 characters */
    message_text: String;
    /** Optional. Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: String;
    /** Optional. List of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: MessageEntity[];
    /** Optional. Link preview generation options for the message */
    link_preview_options?: LinkPreviewOptions;
}
/** Represents the content of a location message to be sent as the result of an inline query. */
export interface InputLocationMessageContent {
    /** Latitude of the location in degrees */
    latitude: Float;
    /** Longitude of the location in degrees */
    longitude: Float;
    /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Float;
    /** Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
    live_period?: Integer;
    /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: Integer;
    /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: Integer;
}
/** Represents the content of a venue message to be sent as the result of an inline query. */
export interface InputVenueMessageContent {
    /** Latitude of the venue in degrees */
    latitude: Float;
    /** Longitude of the venue in degrees */
    longitude: Float;
    /** Name of the venue */
    title: String;
    /** Address of the venue */
    address: String;
    /** Optional. Foursquare identifier of the venue, if known */
    foursquare_id?: String;
    /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: String;
    /** Optional. Google Places identifier of the venue */
    google_place_id?: String;
    /** Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: String;
}
/** Represents the content of a contact message to be sent as the result of an inline query. */
export interface InputContactMessageContent {
    /** Contact's phone number */
    phone_number: String;
    /** Contact's first name */
    first_name: String;
    /** Optional. Contact's last name */
    last_name?: String;
    /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: String;
}
/** Represents the content of an invoice message to be sent as the result of an inline query. */
export interface InputInvoiceMessageContent {
    /** Product name, 1-32 characters */
    title: String;
    /** Product description, 1-255 characters */
    description: String;
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. */
    payload: String;
    /** Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
    provider_token?: String;
    /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
    currency: String;
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
    prices: LabeledPrice[];
    /** Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
    max_tip_amount?: Integer;
    /** Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Integer[];
    /** Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
    provider_data?: String;
    /** Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_url?: String;
    /** Optional. Photo size in bytes */
    photo_size?: Integer;
    /** Optional. Photo width */
    photo_width?: Integer;
    /** Optional. Photo height */
    photo_height?: Integer;
    /** Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
    need_name?: Boolean;
    /** Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
    need_phone_number?: Boolean;
    /** Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
    need_email?: Boolean;
    /** Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
    need_shipping_address?: Boolean;
    /** Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_phone_number_to_provider?: Boolean;
    /** Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_email_to_provider?: Boolean;
    /** Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
    is_flexible?: Boolean;
}
/** Represents a result of an inline query that was chosen by the user and sent to their chat partner. */
export interface ChosenInlineResult {
    /** The unique identifier for the result that was chosen */
    result_id: String;
    /** The user that chose the result */
    from: User;
    /** Optional. Sender location, only for bots that require user location */
    location?: Location;
    /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
    inline_message_id?: String;
    /** The query that was used to obtain the result */
    query: String;
}
/** Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned. */
/** @see {@link answerWebAppQueryResult} for method output */
export interface answerWebAppQueryOptions {
    /** Unique identifier for the query to be answered */
    web_app_query_id: String;
    /** A JSON-serialized object describing the message to be sent */
    result: InlineQueryResult;
}
/** Describes an inline message sent by a Web App on behalf of a user. */
export interface SentWebAppMessage {
    /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. */
    inline_message_id?: String;
}
/** Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object. */
/** @see {@link savePreparedInlineMessageResult} for method output */
export interface savePreparedInlineMessageOptions {
    /** Unique identifier of the target user that can use the prepared message */
    user_id: Integer;
    /** A JSON-serialized object describing the message to be sent */
    result: InlineQueryResult;
    /** Pass True if the message can be sent to private chats with users */
    allow_user_chats?: Boolean;
    /** Pass True if the message can be sent to private chats with bots */
    allow_bot_chats?: Boolean;
    /** Pass True if the message can be sent to group and supergroup chats */
    allow_group_chats?: Boolean;
    /** Pass True if the message can be sent to channel chats */
    allow_channel_chats?: Boolean;
}
/** Describes an inline message to be sent by a user of a Mini App. */
export interface PreparedInlineMessage {
    /** Unique identifier of the prepared message */
    id: String;
    /** Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used */
    expiration_date: Integer;
}
/** Use this method to send invoices. On success, the sent Message is returned. */
/** @see {@link sendInvoiceResult} for method output */
export interface sendInvoiceOptions {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: Integer | String;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Product name, 1-32 characters */
    title: String;
    /** Product description, 1-255 characters */
    description: String;
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. */
    payload: String;
    /** Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
    provider_token?: String;
    /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
    currency: String;
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
    prices: LabeledPrice[];
    /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
    max_tip_amount?: Integer;
    /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Integer[];
    /** Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter */
    start_parameter?: String;
    /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
    provider_data?: String;
    /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
    photo_url?: String;
    /** Photo size in bytes */
    photo_size?: Integer;
    /** Photo width */
    photo_width?: Integer;
    /** Photo height */
    photo_height?: Integer;
    /** Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
    need_name?: Boolean;
    /** Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
    need_phone_number?: Boolean;
    /** Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
    need_email?: Boolean;
    /** Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
    need_shipping_address?: Boolean;
    /** Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_phone_number_to_provider?: Boolean;
    /** Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_email_to_provider?: Boolean;
    /** Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
    is_flexible?: Boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. */
    reply_markup?: InlineKeyboardMarkup;
}
/** Use this method to create a link for an invoice. Returns the created invoice link as String on success. */
/** @see {@link createInvoiceLinkResult} for method output */
export interface createInvoiceLinkOptions {
    /** Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only. */
    business_connection_id?: String;
    /** Product name, 1-32 characters */
    title: String;
    /** Product description, 1-255 characters */
    description: String;
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. */
    payload: String;
    /** Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
    provider_token?: String;
    /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
    currency: String;
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
    prices: LabeledPrice[];
    /** The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars. */
    subscription_period?: Integer;
    /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
    max_tip_amount?: Integer;
    /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Integer[];
    /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
    provider_data?: String;
    /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_url?: String;
    /** Photo size in bytes */
    photo_size?: Integer;
    /** Photo width */
    photo_width?: Integer;
    /** Photo height */
    photo_height?: Integer;
    /** Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
    need_name?: Boolean;
    /** Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
    need_phone_number?: Boolean;
    /** Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
    need_email?: Boolean;
    /** Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
    need_shipping_address?: Boolean;
    /** Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_phone_number_to_provider?: Boolean;
    /** Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_email_to_provider?: Boolean;
    /** Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
    is_flexible?: Boolean;
}
/** If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned. */
/** @see {@link answerShippingQueryResult} for method output */
export interface answerShippingQueryOptions {
    /** Unique identifier for the query to be answered */
    shipping_query_id: String;
    /** Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
    ok: Boolean;
    /** Required if ok is True. A JSON-serialized array of available shipping options. */
    shipping_options?: ShippingOption[];
    /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. “Sorry, delivery to your desired address is unavailable”). Telegram will display this message to the user. */
    error_message?: String;
}
/** Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent. */
/** @see {@link answerPreCheckoutQueryResult} for method output */
export interface answerPreCheckoutQueryOptions {
    /** Unique identifier for the query to be answered */
    pre_checkout_query_id: String;
    /** Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
    ok: Boolean;
    /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
    error_message?: String;
}
/** Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object. */
/** @see {@link getStarTransactionsResult} for method output */
export interface getStarTransactionsOptions {
    /** Number of transactions to skip in the response */
    offset?: Integer;
    /** The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
    limit?: Integer;
}
/** Refunds a successful payment in Telegram Stars. Returns True on success. */
/** @see {@link refundStarPaymentResult} for method output */
export interface refundStarPaymentOptions {
    /** Identifier of the user whose payment will be refunded */
    user_id: Integer;
    /** Telegram payment identifier */
    telegram_payment_charge_id: String;
}
/** Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success. */
/** @see {@link editUserStarSubscriptionResult} for method output */
export interface editUserStarSubscriptionOptions {
    /** Identifier of the user whose subscription will be edited */
    user_id: Integer;
    /** Telegram payment identifier for the subscription */
    telegram_payment_charge_id: String;
    /** Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot. */
    is_canceled: Boolean;
}
/** This object represents a portion of the price for goods or services. */
export interface LabeledPrice {
    /** Portion label */
    label: String;
    /** Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: Integer;
}
/** This object contains basic information about an invoice. */
export interface Invoice {
    /** Product name */
    title: String;
    /** Product description */
    description: String;
    /** Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: String;
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
    currency: String;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Integer;
}
/** This object represents a shipping address. */
export interface ShippingAddress {
    /** Two-letter ISO 3166-1 alpha-2 country code */
    country_code: String;
    /** State, if applicable */
    state: String;
    /** City */
    city: String;
    /** First line for the address */
    street_line1: String;
    /** Second line for the address */
    street_line2: String;
    /** Address post code */
    post_code: String;
}
/** This object represents information about an order. */
export interface OrderInfo {
    /** Optional. User name */
    name?: String;
    /** Optional. User's phone number */
    phone_number?: String;
    /** Optional. User email */
    email?: String;
    /** Optional. User shipping address */
    shipping_address?: ShippingAddress;
}
/** This object represents one shipping option. */
export interface ShippingOption {
    /** Shipping option identifier */
    id: String;
    /** Option title */
    title: String;
    /** List of price portions */
    prices: LabeledPrice[];
}
/** This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram's control. */
export interface SuccessfulPayment {
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
    currency: String;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Integer;
    /** Bot-specified invoice payload */
    invoice_payload: String;
    /** Optional. Expiration date of the subscription, in Unix time; for recurring payments only */
    subscription_expiration_date?: Integer;
    /** Optional. True, if the payment is a recurring payment for a subscription */
    is_recurring?: True;
    /** Optional. True, if the payment is the first payment for a subscription */
    is_first_recurring?: True;
    /** Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: String;
    /** Optional. Order information provided by the user */
    order_info?: OrderInfo;
    /** Telegram payment identifier */
    telegram_payment_charge_id: String;
    /** Provider payment identifier */
    provider_payment_charge_id: String;
}
/** This object contains basic information about a refunded payment. */
export interface RefundedPayment {
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR” */
    currency: String;
    /** Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Integer;
    /** Bot-specified invoice payload */
    invoice_payload: String;
    /** Telegram payment identifier */
    telegram_payment_charge_id: String;
    /** Optional. Provider payment identifier */
    provider_payment_charge_id?: String;
}
/** This object contains information about an incoming shipping query. */
export interface ShippingQuery {
    /** Unique query identifier */
    id: String;
    /** User who sent the query */
    from: User;
    /** Bot-specified invoice payload */
    invoice_payload: String;
    /** User specified shipping address */
    shipping_address: ShippingAddress;
}
/** This object contains information about an incoming pre-checkout query. */
export interface PreCheckoutQuery {
    /** Unique query identifier */
    id: String;
    /** User who sent the query */
    from: User;
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
    currency: String;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Integer;
    /** Bot-specified invoice payload */
    invoice_payload: String;
    /** Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: String;
    /** Optional. Order information provided by the user */
    order_info?: OrderInfo;
}
/** This object contains information about a paid media purchase. */
export interface PaidMediaPurchased {
    /** User who purchased the media */
    from: User;
    /** Bot-specified paid media payload */
    paid_media_payload: String;
}
/** The withdrawal is in progress. */
export interface RevenueWithdrawalStatePending {
    /** Type of the state, always “pending” */
    type: "pending";
}
/** The withdrawal succeeded. */
export interface RevenueWithdrawalStateSucceeded {
    /** Type of the state, always “succeeded” */
    type: "succeeded";
    /** Date the withdrawal was completed in Unix time */
    date: Integer;
    /** An HTTPS URL that can be used to see transaction details */
    url: String;
}
/** The withdrawal failed and the transaction was refunded. */
export interface RevenueWithdrawalStateFailed {
    /** Type of the state, always “failed” */
    type: "failed";
}
/** Contains information about the affiliate that received a commission via this transaction. */
export interface AffiliateInfo {
    /** Optional. The bot or the user that received an affiliate commission if it was received by a bot or a user */
    affiliate_user?: User;
    /** Optional. The chat that received an affiliate commission if it was received by a chat */
    affiliate_chat?: Chat;
    /** The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users */
    commission_per_mille: Integer;
    /** Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds */
    amount: Integer;
    /** Optional. The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds */
    nanostar_amount?: Integer;
}
/** Describes a transaction with a user. */
export interface TransactionPartnerUser {
    /** Type of the transaction partner, always “user” */
    type: "user";
    /** Type of the transaction, currently one of “invoice_payment” for payments via invoices, “paid_media_payment” for payments for paid media, “gift_purchase” for gifts sent by the bot, “premium_purchase” for Telegram Premium subscriptions gifted by the bot, “business_account_transfer” for direct transfers from managed business accounts */
    transaction_type: String;
    /** Information about the user */
    user: User;
    /** Optional. Information about the affiliate that received a commission via this transaction. Can be available only for “invoice_payment” and “paid_media_payment” transactions. */
    affiliate?: AffiliateInfo;
    /** Optional. Bot-specified invoice payload. Can be available only for “invoice_payment” transactions. */
    invoice_payload?: String;
    /** Optional. The duration of the paid subscription. Can be available only for “invoice_payment” transactions. */
    subscription_period?: Integer;
    /** Optional. Information about the paid media bought by the user; for “paid_media_payment” transactions only */
    paid_media?: PaidMedia[];
    /** Optional. Bot-specified paid media payload. Can be available only for “paid_media_payment” transactions. */
    paid_media_payload?: String;
    /** Optional. The gift sent to the user by the bot; for “gift_purchase” transactions only */
    gift?: Gift;
    /** Optional. Number of months the gifted Telegram Premium subscription will be active for; for “premium_purchase” transactions only */
    premium_subscription_duration?: Integer;
}
/** Describes a transaction with a chat. */
export interface TransactionPartnerChat {
    /** Type of the transaction partner, always “chat” */
    type: "chat";
    /** Information about the chat */
    chat: Chat;
    /** Optional. The gift sent to the chat by the bot */
    gift?: Gift;
}
/** Describes the affiliate program that issued the affiliate commission received via this transaction. */
export interface TransactionPartnerAffiliateProgram {
    /** Type of the transaction partner, always “affiliate_program” */
    type: "affiliate_program";
    /** Optional. Information about the bot that sponsored the affiliate program */
    sponsor_user?: User;
    /** The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users */
    commission_per_mille: Integer;
}
/** Describes a withdrawal transaction with Fragment. */
export interface TransactionPartnerFragment {
    /** Type of the transaction partner, always “fragment” */
    type: "fragment";
    /** Optional. State of the transaction if the transaction is outgoing */
    withdrawal_state?: RevenueWithdrawalState;
}
/** Describes a withdrawal transaction to the Telegram Ads platform. */
export interface TransactionPartnerTelegramAds {
    /** Type of the transaction partner, always “telegram_ads” */
    type: "telegram_ads";
}
/** Describes a transaction with payment for paid broadcasting. */
export interface TransactionPartnerTelegramApi {
    /** Type of the transaction partner, always “telegram_api” */
    type: "telegram_api";
    /** The number of successful requests that exceeded regular limits and were therefore billed */
    request_count: Integer;
}
/** Describes a transaction with an unknown source or recipient. */
export interface TransactionPartnerOther {
    /** Type of the transaction partner, always “other” */
    type: "other";
}
/** Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction, the refunded Stars will be deducted from the bot's balance. This is outside of Telegram's control. */
export interface StarTransaction {
    /** Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users. */
    id: String;
    /** Integer amount of Telegram Stars transferred by the transaction */
    amount: Integer;
    /** Optional. The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999 */
    nanostar_amount?: Integer;
    /** Date the transaction was created in Unix time */
    date: Integer;
    /** Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions */
    source?: TransactionPartner;
    /** Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions */
    receiver?: TransactionPartner;
}
/** Contains a list of Telegram Star transactions. */
export interface StarTransactions {
    /** The list of transactions */
    transactions: StarTransaction[];
}
/** Describes Telegram Passport data shared with the bot by the user. */
export interface PassportData {
    /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: EncryptedPassportElement[];
    /** Encrypted credentials required to decrypt the data */
    credentials: EncryptedCredentials;
}
/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB. */
export interface PassportFile {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: String;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: String;
    /** File size in bytes */
    file_size: Integer;
    /** Unix time when the file was uploaded */
    file_date: Integer;
}
/** Describes documents or other Telegram Passport elements shared with the bot by the user. */
export interface EncryptedPassportElement {
    /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
    type: String;
    /** Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
    data?: String;
    /** Optional. User's verified phone number; available only for “phone_number” type */
    phone_number?: String;
    /** Optional. User's verified email address; available only for “email” type */
    email?: String;
    /** Optional. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    files?: PassportFile[];
    /** Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    front_side?: PassportFile;
    /** Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    reverse_side?: PassportFile;
    /** Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    selfie?: PassportFile;
    /** Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    translation?: PassportFile[];
    /** Base64-encoded element hash for using in PassportElementErrorUnspecified */
    hash: String;
}
/** Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes. */
export interface EncryptedCredentials {
    /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
    data: String;
    /** Base64-encoded data hash for data authentication */
    hash: String;
    /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: String;
}
/** Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success. */
/** Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues. */
/** @see {@link setPassportDataErrorsResult} for method output */
export interface setPassportDataErrorsOptions {
    /** User identifier */
    user_id: Integer;
    /** A JSON-serialized array describing the errors */
    errors: PassportElementError[];
}
/** Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes. */
export interface PassportElementErrorDataField {
    /** Error source, must be data */
    source: String;
    /** The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” */
    type: String;
    /** Name of the data field which has the error */
    field_name: String;
    /** Base64-encoded data hash */
    data_hash: String;
    /** Error message */
    message: String;
}
/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes. */
export interface PassportElementErrorFrontSide {
    /** Error source, must be front_side */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: String;
    /** Base64-encoded hash of the file with the front side of the document */
    file_hash: String;
    /** Error message */
    message: String;
}
/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes. */
export interface PassportElementErrorReverseSide {
    /** Error source, must be reverse_side */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    type: String;
    /** Base64-encoded hash of the file with the reverse side of the document */
    file_hash: String;
    /** Error message */
    message: String;
}
/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes. */
export interface PassportElementErrorSelfie {
    /** Error source, must be selfie */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: String;
    /** Base64-encoded hash of the file with the selfie */
    file_hash: String;
    /** Error message */
    message: String;
}
/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes. */
export interface PassportElementErrorFile {
    /** Error source, must be file */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** Base64-encoded file hash */
    file_hash: String;
    /** Error message */
    message: String;
}
/** Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes. */
export interface PassportElementErrorFiles {
    /** Error source, must be files */
    source: String;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** List of base64-encoded file hashes */
    file_hashes: String[];
    /** Error message */
    message: String;
}
/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes. */
export interface PassportElementErrorTranslationFile {
    /** Error source, must be translation_file */
    source: String;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** Base64-encoded file hash */
    file_hash: String;
    /** Error message */
    message: String;
}
/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change. */
export interface PassportElementErrorTranslationFiles {
    /** Error source, must be translation_files */
    source: String;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: String;
    /** List of base64-encoded file hashes */
    file_hashes: String[];
    /** Error message */
    message: String;
}
/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export interface PassportElementErrorUnspecified {
    /** Error source, must be unspecified */
    source: String;
    /** Type of element of the user's Telegram Passport which has the issue */
    type: String;
    /** Base64-encoded element hash */
    element_hash: String;
    /** Error message */
    message: String;
}
/** Use this method to send a game. On success, the sent Message is returned. */
/** @see {@link sendGameResult} for method output */
export interface sendGameOptions {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: String;
    /** Unique identifier for the target chat */
    chat_id: Integer;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: Integer;
    /** Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. */
    game_short_name: String;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: Boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: Boolean;
    /** Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance */
    allow_paid_broadcast?: Boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: String;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game. */
    reply_markup?: InlineKeyboardMarkup;
}
/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export interface Game {
    /** Title of the game */
    title: String;
    /** Description of the game */
    description: String;
    /** Photo that will be displayed in the game message in chats. */
    photo: PhotoSize[];
    /** Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
    text?: String;
    /** Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
    text_entities?: MessageEntity[];
    /** Optional. Animation that will be displayed in the game message in chats. Upload via BotFather */
    animation?: Animation;
}
/** Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False. */
/** @see {@link setGameScoreResult} for method output */
export interface setGameScoreOptions {
    /** User identifier */
    user_id: Integer;
    /** New score, must be non-negative */
    score: Integer;
    /** Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
    force?: Boolean;
    /** Pass True if the game message should not be automatically edited to include the current scoreboard */
    disable_edit_message?: Boolean;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat */
    chat_id?: Integer;
    /** Required if inline_message_id is not specified. Identifier of the sent message */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
}
/** Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects. */
/** @see {@link getGameHighScoresResult} for method output */
export interface getGameHighScoresOptions {
    /** Target user id */
    user_id: Integer;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat */
    chat_id?: Integer;
    /** Required if inline_message_id is not specified. Identifier of the sent message */
    message_id?: Integer;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: String;
}
/** This object represents one row of the high scores table for a game. */
export interface GameHighScore {
    /** Position in high score table for the game */
    position: Integer;
    /** User */
    user: User;
    /** Score */
    score: Integer;
}
/** Type returned from {@link getUpdatesOptions getUpdates} method */
export type getUpdatesResult = Update[];
/** Type returned from {@link setWebhookOptions setWebhook} method */
export type setWebhookResult = Update | True;
/** Type returned from {@link deleteWebhookOptions deleteWebhook} method */
export type deleteWebhookResult = True;
/** Type returned from {@link sendMessageOptions sendMessage} method */
export type sendMessageResult = Message;
/** Type returned from {@link forwardMessageOptions forwardMessage} method */
export type forwardMessageResult = Message;
/** Type returned from {@link forwardMessagesOptions forwardMessages} method */
export type forwardMessagesResult = MessageId;
/** Type returned from {@link copyMessageOptions copyMessage} method */
export type copyMessageResult = MessageId;
/** Type returned from {@link copyMessagesOptions copyMessages} method */
export type copyMessagesResult = MessageId;
/** Type returned from {@link sendPhotoOptions sendPhoto} method */
export type sendPhotoResult = Message;
/** Type returned from {@link sendAudioOptions sendAudio} method */
export type sendAudioResult = Message;
/** Type returned from {@link sendDocumentOptions sendDocument} method */
export type sendDocumentResult = Message;
/** Type returned from {@link sendVideoOptions sendVideo} method */
export type sendVideoResult = Message;
/** Type returned from {@link sendAnimationOptions sendAnimation} method */
export type sendAnimationResult = Message;
/** Type returned from {@link sendVoiceOptions sendVoice} method */
export type sendVoiceResult = Audio | Message;
/** Type returned from {@link sendVideoNoteOptions sendVideoNote} method */
export type sendVideoNoteResult = Message;
/** Type returned from {@link sendPaidMediaOptions sendPaidMedia} method */
export type sendPaidMediaResult = Message;
/** Type returned from {@link sendMediaGroupOptions sendMediaGroup} method */
export type sendMediaGroupResult = Message;
/** Type returned from {@link sendLocationOptions sendLocation} method */
export type sendLocationResult = Message;
/** Type returned from {@link sendVenueOptions sendVenue} method */
export type sendVenueResult = Message;
/** Type returned from {@link sendContactOptions sendContact} method */
export type sendContactResult = Message;
/** Type returned from {@link sendPollOptions sendPoll} method */
export type sendPollResult = Message;
/** Type returned from {@link sendChecklistOptions sendChecklist} method */
export type sendChecklistResult = Message;
/** Type returned from {@link sendDiceOptions sendDice} method */
export type sendDiceResult = Message;
/** Type returned from {@link sendChatActionOptions sendChatAction} method */
export type sendChatActionResult = True;
/** Type returned from {@link setMessageReactionOptions setMessageReaction} method */
export type setMessageReactionResult = True;
/** Type returned from {@link getUserProfilePhotosOptions getUserProfilePhotos} method */
export type getUserProfilePhotosResult = UserProfilePhotos;
/** Type returned from {@link setUserEmojiStatusOptions setUserEmojiStatus} method */
export type setUserEmojiStatusResult = True;
/** Type returned from {@link getFileOptions getFile} method */
export type getFileResult = File;
/** Type returned from {@link banChatMemberOptions banChatMember} method */
export type banChatMemberResult = True;
/** Type returned from {@link unbanChatMemberOptions unbanChatMember} method */
export type unbanChatMemberResult = True;
/** Type returned from {@link restrictChatMemberOptions restrictChatMember} method */
export type restrictChatMemberResult = True | True;
/** Type returned from {@link promoteChatMemberOptions promoteChatMember} method */
export type promoteChatMemberResult = True;
/** Type returned from {@link setChatAdministratorCustomTitleOptions setChatAdministratorCustomTitle} method */
export type setChatAdministratorCustomTitleResult = True;
/** Type returned from {@link banChatSenderChatOptions banChatSenderChat} method */
export type banChatSenderChatResult = True;
/** Type returned from {@link unbanChatSenderChatOptions unbanChatSenderChat} method */
export type unbanChatSenderChatResult = True;
/** Type returned from {@link setChatPermissionsOptions setChatPermissions} method */
export type setChatPermissionsResult = True;
/** Type returned from {@link exportChatInviteLinkOptions exportChatInviteLink} method */
export type exportChatInviteLinkResult = String;
/** Type returned from {@link createChatInviteLinkOptions createChatInviteLink} method */
export type createChatInviteLinkResult = ChatInviteLink;
/** Type returned from {@link editChatInviteLinkOptions editChatInviteLink} method */
export type editChatInviteLinkResult = ChatInviteLink;
/** Type returned from {@link createChatSubscriptionInviteLinkOptions createChatSubscriptionInviteLink} method */
export type createChatSubscriptionInviteLinkResult = ChatInviteLink;
/** Type returned from {@link editChatSubscriptionInviteLinkOptions editChatSubscriptionInviteLink} method */
export type editChatSubscriptionInviteLinkResult = ChatInviteLink;
/** Type returned from {@link revokeChatInviteLinkOptions revokeChatInviteLink} method */
export type revokeChatInviteLinkResult = ChatInviteLink;
/** Type returned from {@link approveChatJoinRequestOptions approveChatJoinRequest} method */
export type approveChatJoinRequestResult = True;
/** Type returned from {@link declineChatJoinRequestOptions declineChatJoinRequest} method */
export type declineChatJoinRequestResult = True;
/** Type returned from {@link setChatPhotoOptions setChatPhoto} method */
export type setChatPhotoResult = True;
/** Type returned from {@link deleteChatPhotoOptions deleteChatPhoto} method */
export type deleteChatPhotoResult = True;
/** Type returned from {@link setChatTitleOptions setChatTitle} method */
export type setChatTitleResult = True;
/** Type returned from {@link setChatDescriptionOptions setChatDescription} method */
export type setChatDescriptionResult = True;
/** Type returned from {@link pinChatMessageOptions pinChatMessage} method */
export type pinChatMessageResult = True;
/** Type returned from {@link unpinChatMessageOptions unpinChatMessage} method */
export type unpinChatMessageResult = True;
/** Type returned from {@link unpinAllChatMessagesOptions unpinAllChatMessages} method */
export type unpinAllChatMessagesResult = True;
/** Type returned from {@link leaveChatOptions leaveChat} method */
export type leaveChatResult = True;
/** Type returned from {@link getChatOptions getChat} method */
export type getChatResult = ChatFullInfo;
/** Type returned from {@link getChatAdministratorsOptions getChatAdministrators} method */
export type getChatAdministratorsResult = ChatMember[];
/** Type returned from {@link getChatMemberCountOptions getChatMemberCount} method */
export type getChatMemberCountResult = Int;
/** Type returned from {@link getChatMemberOptions getChatMember} method */
export type getChatMemberResult = ChatMember;
/** Type returned from {@link setChatStickerSetOptions setChatStickerSet} method */
export type setChatStickerSetResult = True;
/** Type returned from {@link deleteChatStickerSetOptions deleteChatStickerSet} method */
export type deleteChatStickerSetResult = True;
/** Type returned from {@link createForumTopicOptions createForumTopic} method */
export type createForumTopicResult = ForumTopic;
/** Type returned from {@link editForumTopicOptions editForumTopic} method */
export type editForumTopicResult = True;
/** Type returned from {@link closeForumTopicOptions closeForumTopic} method */
export type closeForumTopicResult = True;
/** Type returned from {@link reopenForumTopicOptions reopenForumTopic} method */
export type reopenForumTopicResult = True;
/** Type returned from {@link deleteForumTopicOptions deleteForumTopic} method */
export type deleteForumTopicResult = True;
/** Type returned from {@link unpinAllForumTopicMessagesOptions unpinAllForumTopicMessages} method */
export type unpinAllForumTopicMessagesResult = True;
/** Type returned from {@link editGeneralForumTopicOptions editGeneralForumTopic} method */
export type editGeneralForumTopicResult = True;
/** Type returned from {@link closeGeneralForumTopicOptions closeGeneralForumTopic} method */
export type closeGeneralForumTopicResult = True;
/** Type returned from {@link reopenGeneralForumTopicOptions reopenGeneralForumTopic} method */
export type reopenGeneralForumTopicResult = True;
/** Type returned from {@link hideGeneralForumTopicOptions hideGeneralForumTopic} method */
export type hideGeneralForumTopicResult = True;
/** Type returned from {@link unhideGeneralForumTopicOptions unhideGeneralForumTopic} method */
export type unhideGeneralForumTopicResult = True;
/** Type returned from {@link unpinAllGeneralForumTopicMessagesOptions unpinAllGeneralForumTopicMessages} method */
export type unpinAllGeneralForumTopicMessagesResult = True;
/** Type returned from {@link answerCallbackQueryOptions answerCallbackQuery} method */
export type answerCallbackQueryResult = True;
/** Type returned from {@link getUserChatBoostsOptions getUserChatBoosts} method */
export type getUserChatBoostsResult = UserChatBoosts;
/** Type returned from {@link getBusinessConnectionOptions getBusinessConnection} method */
export type getBusinessConnectionResult = BusinessConnection;
/** Type returned from {@link setMyCommandsOptions setMyCommands} method */
export type setMyCommandsResult = True;
/** Type returned from {@link deleteMyCommandsOptions deleteMyCommands} method */
export type deleteMyCommandsResult = True;
/** Type returned from {@link getMyCommandsOptions getMyCommands} method */
export type getMyCommandsResult = BotCommand[];
/** Type returned from {@link setMyNameOptions setMyName} method */
export type setMyNameResult = True;
/** Type returned from {@link getMyNameOptions getMyName} method */
export type getMyNameResult = BotName;
/** Type returned from {@link setMyDescriptionOptions setMyDescription} method */
export type setMyDescriptionResult = True;
/** Type returned from {@link getMyDescriptionOptions getMyDescription} method */
export type getMyDescriptionResult = BotDescription;
/** Type returned from {@link setMyShortDescriptionOptions setMyShortDescription} method */
export type setMyShortDescriptionResult = True;
/** Type returned from {@link getMyShortDescriptionOptions getMyShortDescription} method */
export type getMyShortDescriptionResult = BotShortDescription;
/** Type returned from {@link setChatMenuButtonOptions setChatMenuButton} method */
export type setChatMenuButtonResult = True;
/** Type returned from {@link getChatMenuButtonOptions getChatMenuButton} method */
export type getChatMenuButtonResult = MenuButton;
/** Type returned from {@link setMyDefaultAdministratorRightsOptions setMyDefaultAdministratorRights} method */
export type setMyDefaultAdministratorRightsResult = True;
/** Type returned from {@link getMyDefaultAdministratorRightsOptions getMyDefaultAdministratorRights} method */
export type getMyDefaultAdministratorRightsResult = ChatAdministratorRights;
/** Type returned from {@link editMessageTextOptions editMessageText} method */
export type editMessageTextResult = Message | True;
/** Type returned from {@link editMessageCaptionOptions editMessageCaption} method */
export type editMessageCaptionResult = Message | True;
/** Type returned from {@link editMessageMediaOptions editMessageMedia} method */
export type editMessageMediaResult = Message | True;
/** Type returned from {@link editMessageLiveLocationOptions editMessageLiveLocation} method */
export type editMessageLiveLocationResult = Message | True;
/** Type returned from {@link stopMessageLiveLocationOptions stopMessageLiveLocation} method */
export type stopMessageLiveLocationResult = Message | True;
/** Type returned from {@link editMessageChecklistOptions editMessageChecklist} method */
export type editMessageChecklistResult = Message;
/** Type returned from {@link editMessageReplyMarkupOptions editMessageReplyMarkup} method */
export type editMessageReplyMarkupResult = Message | True;
/** Type returned from {@link stopPollOptions stopPoll} method */
export type stopPollResult = Poll;
/** Type returned from {@link deleteMessageOptions deleteMessage} method */
export type deleteMessageResult = True;
/** Type returned from {@link deleteMessagesOptions deleteMessages} method */
export type deleteMessagesResult = True;
/** Type returned from {@link sendGiftOptions sendGift} method */
export type sendGiftResult = True;
/** Type returned from {@link giftPremiumSubscriptionOptions giftPremiumSubscription} method */
export type giftPremiumSubscriptionResult = Gifts | True;
/** Type returned from {@link verifyUserOptions verifyUser} method */
export type verifyUserResult = True;
/** Type returned from {@link verifyChatOptions verifyChat} method */
export type verifyChatResult = True;
/** Type returned from {@link removeUserVerificationOptions removeUserVerification} method */
export type removeUserVerificationResult = True;
/** Type returned from {@link removeChatVerificationOptions removeChatVerification} method */
export type removeChatVerificationResult = True;
/** Type returned from {@link readBusinessMessageOptions readBusinessMessage} method */
export type readBusinessMessageResult = True;
/** Type returned from {@link deleteBusinessMessagesOptions deleteBusinessMessages} method */
export type deleteBusinessMessagesResult = True;
/** Type returned from {@link setBusinessAccountNameOptions setBusinessAccountName} method */
export type setBusinessAccountNameResult = True;
/** Type returned from {@link setBusinessAccountUsernameOptions setBusinessAccountUsername} method */
export type setBusinessAccountUsernameResult = True;
/** Type returned from {@link setBusinessAccountBioOptions setBusinessAccountBio} method */
export type setBusinessAccountBioResult = True;
/** Type returned from {@link setBusinessAccountProfilePhotoOptions setBusinessAccountProfilePhoto} method */
export type setBusinessAccountProfilePhotoResult = True;
/** Type returned from {@link removeBusinessAccountProfilePhotoOptions removeBusinessAccountProfilePhoto} method */
export type removeBusinessAccountProfilePhotoResult = True;
/** Type returned from {@link setBusinessAccountGiftSettingsOptions setBusinessAccountGiftSettings} method */
export type setBusinessAccountGiftSettingsResult = True;
/** Type returned from {@link getBusinessAccountStarBalanceOptions getBusinessAccountStarBalance} method */
export type getBusinessAccountStarBalanceResult = StarAmount;
/** Type returned from {@link transferBusinessAccountStarsOptions transferBusinessAccountStars} method */
export type transferBusinessAccountStarsResult = True;
/** Type returned from {@link getBusinessAccountGiftsOptions getBusinessAccountGifts} method */
export type getBusinessAccountGiftsResult = OwnedGifts;
/** Type returned from {@link convertGiftToStarsOptions convertGiftToStars} method */
export type convertGiftToStarsResult = True;
/** Type returned from {@link upgradeGiftOptions upgradeGift} method */
export type upgradeGiftResult = True;
/** Type returned from {@link transferGiftOptions transferGift} method */
export type transferGiftResult = True;
/** Type returned from {@link postStoryOptions postStory} method */
export type postStoryResult = Story;
/** Type returned from {@link editStoryOptions editStory} method */
export type editStoryResult = Story;
/** Type returned from {@link deleteStoryOptions deleteStory} method */
export type deleteStoryResult = True;
/** Type returned from {@link sendStickerOptions sendSticker} method */
export type sendStickerResult = Message;
/** Type returned from {@link getStickerSetOptions getStickerSet} method */
export type getStickerSetResult = StickerSet;
/** Type returned from {@link getCustomEmojiStickersOptions getCustomEmojiStickers} method */
export type getCustomEmojiStickersResult = Sticker[];
/** Type returned from {@link uploadStickerFileOptions uploadStickerFile} method */
export type uploadStickerFileResult = File;
/** Type returned from {@link createNewStickerSetOptions createNewStickerSet} method */
export type createNewStickerSetResult = True;
/** Type returned from {@link addStickerToSetOptions addStickerToSet} method */
export type addStickerToSetResult = True;
/** Type returned from {@link setStickerPositionInSetOptions setStickerPositionInSet} method */
export type setStickerPositionInSetResult = True;
/** Type returned from {@link deleteStickerFromSetOptions deleteStickerFromSet} method */
export type deleteStickerFromSetResult = True;
/** Type returned from {@link replaceStickerInSetOptions replaceStickerInSet} method */
export type replaceStickerInSetResult = True;
/** Type returned from {@link setStickerEmojiListOptions setStickerEmojiList} method */
export type setStickerEmojiListResult = True;
/** Type returned from {@link setStickerKeywordsOptions setStickerKeywords} method */
export type setStickerKeywordsResult = True;
/** Type returned from {@link setStickerMaskPositionOptions setStickerMaskPosition} method */
export type setStickerMaskPositionResult = True;
/** Type returned from {@link setStickerSetTitleOptions setStickerSetTitle} method */
export type setStickerSetTitleResult = True;
/** Type returned from {@link setStickerSetThumbnailOptions setStickerSetThumbnail} method */
export type setStickerSetThumbnailResult = True;
/** Type returned from {@link setCustomEmojiStickerSetThumbnailOptions setCustomEmojiStickerSetThumbnail} method */
export type setCustomEmojiStickerSetThumbnailResult = True;
/** Type returned from {@link deleteStickerSetOptions deleteStickerSet} method */
export type deleteStickerSetResult = True;
/** Type returned from {@link answerInlineQueryOptions answerInlineQuery} method */
export type answerInlineQueryResult = True;
/** Type returned from {@link answerWebAppQueryOptions answerWebAppQuery} method */
export type answerWebAppQueryResult = SentWebAppMessage;
/** Type returned from {@link savePreparedInlineMessageOptions savePreparedInlineMessage} method */
export type savePreparedInlineMessageResult = PreparedInlineMessage;
/** Type returned from {@link sendInvoiceOptions sendInvoice} method */
export type sendInvoiceResult = Message;
/** Type returned from {@link createInvoiceLinkOptions createInvoiceLink} method */
export type createInvoiceLinkResult = String;
/** Type returned from {@link answerShippingQueryOptions answerShippingQuery} method */
export type answerShippingQueryResult = Update | True;
/** Type returned from {@link answerPreCheckoutQueryOptions answerPreCheckoutQuery} method */
export type answerPreCheckoutQueryResult = Update | True;
/** Type returned from {@link getStarTransactionsOptions getStarTransactions} method */
export type getStarTransactionsResult = StarTransactions;
/** Type returned from {@link refundStarPaymentOptions refundStarPayment} method */
export type refundStarPaymentResult = True;
/** Type returned from {@link editUserStarSubscriptionOptions editUserStarSubscription} method */
export type editUserStarSubscriptionResult = True;
/** Type returned from {@link setPassportDataErrorsOptions setPassportDataErrors} method */
export type setPassportDataErrorsResult = True;
/** Type returned from {@link sendGameOptions sendGame} method */
export type sendGameResult = Message;
/** Type returned from {@link setGameScoreOptions setGameScore} method */
export type setGameScoreResult = Message | True;
/** Type returned from {@link getGameHighScoresOptions getGameHighScores} method */
export type getGameHighScoresResult = GameHighScore[];
export {};
