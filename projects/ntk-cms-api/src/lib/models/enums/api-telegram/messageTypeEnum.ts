export enum MessageTypeEnum {
  //
  // Summary:
  //     The Telegram.Bot.Types.Message is unknown
  unknown = 0,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains text
  text = 1,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.PhotoSize
  photo = 2,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains an Telegram.Bot.Types.Audio
  audio = 3,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Video
  video = 4,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Voice
  voice = 5,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Document
  document = 6,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Sticker
  sticker = 7,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Location
  location = 8,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Contact
  contact = 9,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Venue
  venue = 10,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Game
  game = 11,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.VideoNote
  videoNote = 12,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Payments.Invoice
  invoice = 13,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Payments.SuccessfulPayment
  successfulPayment = 14,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.ConnectedWebsite
  websiteConnected = 15,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.NewChatMembers
  chatMembersAdded = 16,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.LeftChatMember
  chatMemberLeft = 17,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.NewChatTitle
  chatTitleChanged = 18,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.NewChatPhoto
  chatPhotoChanged = 19,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.PinnedMessage
  messagePinned = 20,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.DeleteChatPhoto
  chatPhotoDeleted = 21,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.GroupChatCreated
  groupCreated = 22,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.SupergroupChatCreated
  supergroupCreated = 23,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.ChannelChatCreated
  channelCreated = 24,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains non-default Telegram.Bot.Types.Message.MigrateFromChatId
  migratedToSupergroup = 25,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains non-default Telegram.Bot.Types.Message.MigrateToChatId
  migratedFromGroup = 26,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.Poll
  poll = 27,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.Dice
  dice = 28,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.MessageAutoDeleteTimerChanged
  messageAutoDeleteTimerChanged = 29,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.ProximityAlertTriggered
  proximityAlertTriggered = 30,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatScheduled
  voiceChatScheduled = 31,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatStarted
  voiceChatStarted = 32,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatEnded
  voiceChatEnded = 33,
  //
  // Summary:
  //     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatParticipantsInvited
  voiceChatParticipantsInvited = 34
}
