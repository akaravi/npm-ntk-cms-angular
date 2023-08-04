export enum UpdateTypeEnum {
  //
  // Summary:
  //     Update Type is unknown
  unknown = 0,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains a Telegram.Bot.Types.Message.
  message = 1,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.InlineQuery.
  inlineQuery = 2,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains a Telegram.Bot.Types.ChosenInlineResult.
  chosenInlineResult = 3,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains a Telegram.Bot.Types.CallbackQuery
  callbackQuery = 4,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an edited Telegram.Bot.Types.Message
  editedMessage = 5,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains a channel post Telegram.Bot.Types.Message
  channelPost = 6,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an edited channel post Telegram.Bot.Types.Message
  editedChannelPost = 7,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.ShippingQuery
  shippingQuery = 8,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.PreCheckoutQuery
  preCheckoutQuery = 9,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.Poll
  poll = 10,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.PollAnswer
  pollAnswer = 11,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.MyChatMember
  myChatMember = 12,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.ChatMember
  chatMember = 13,
  //
  // Summary:
  //     The Telegram.Bot.Types.Update contains an Telegram.Bot.Types.Enums.UpdateType.ChatJoinRequest
  chatJoinRequest = 14
}
