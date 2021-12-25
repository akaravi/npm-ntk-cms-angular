export enum EnumUpdateType{
	//
		// Summary:
		//     Update Type is unknown
		Unknown = 0,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains a Telegram.Bot.Types.Message.
		Message = 1,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.InlineQuery.
		InlineQuery = 2,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains a Telegram.Bot.Types.ChosenInlineResult.
		ChosenInlineResult = 3,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains a Telegram.Bot.Types.CallbackQuery
		CallbackQuery = 4,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an edited Telegram.Bot.Types.Message
		EditedMessage = 5,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains a channel post Telegram.Bot.Types.Message
		ChannelPost = 6,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an edited channel post Telegram.Bot.Types.Message
		EditedChannelPost = 7,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.ShippingQuery
		ShippingQuery = 8,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.PreCheckoutQuery
		PreCheckoutQuery = 9,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.Poll
		Poll = 10,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.PollAnswer
		PollAnswer = 11,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.MyChatMember
		MyChatMember = 12,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.ChatMember
		ChatMember = 13,
		//
		// Summary:
		//     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.ChatJoinRequest
		ChatJoinRequest = 14
}
