export enum EnumMessageType{
  	//
		// Summary:
		//     The Telegram.Bot.Types.Message is unknown
		Unknown = 0,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains text
		Text = 1,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.PhotoSize
		Photo = 2,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains an Telegram.Bot.Types.Audio
		Audio = 3,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Video
		Video = 4,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Voice
		Voice = 5,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Document
		Document = 6,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Sticker
		Sticker = 7,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Location
		Location = 8,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Contact
		Contact = 9,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Venue
		Venue = 10,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Game
		Game = 11,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.VideoNote
		VideoNote = 12,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Payments.Invoice
		Invoice = 13,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Payments.SuccessfulPayment
		SuccessfulPayment = 14,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.ConnectedWebsite
		WebsiteConnected = 15,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.NewChatMembers
		ChatMembersAdded = 16,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.LeftChatMember
		ChatMemberLeft = 17,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.NewChatTitle
		ChatTitleChanged = 18,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.NewChatPhoto
		ChatPhotoChanged = 19,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.PinnedMessage
		MessagePinned = 20,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.DeleteChatPhoto
		ChatPhotoDeleted = 21,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.GroupChatCreated
		GroupCreated = 22,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.SupergroupChatCreated
		SupergroupCreated = 23,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains a Telegram.Bot.Types.Message.ChannelChatCreated
		ChannelCreated = 24,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains non-default Telegram.Bot.Types.Message.MigrateFromChatId
		MigratedToSupergroup = 25,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains non-default Telegram.Bot.Types.Message.MigrateToChatId
		MigratedFromGroup = 26,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.Poll
		Poll = 27,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.Dice
		Dice = 28,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.MessageAutoDeleteTimerChanged
		MessageAutoDeleteTimerChanged = 29,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.ProximityAlertTriggered
		ProximityAlertTriggered = 30,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatScheduled
		VoiceChatScheduled = 31,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatStarted
		VoiceChatStarted = 32,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatEnded
		VoiceChatEnded = 33,
		//
		// Summary:
		//     The Telegram.Bot.Types.Message contains Telegram.Bot.Types.Message.VoiceChatParticipantsInvited
		VoiceChatParticipantsInvited = 34
}
