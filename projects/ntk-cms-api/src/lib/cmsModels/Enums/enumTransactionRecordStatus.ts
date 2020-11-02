export enum EnumTransactionRecordStatus {
  None = 0,
  SendUserToBank = 1,
  BackUserFromBank = 2,
  TransactionCheck = 3,
  TransactionSuccessful = 4,
  TransactionFailed = 5,
  GeneratStampValues = 6,
  TimestampOk = 7,
  TimestampError = 8,
  SendUserToBankOk = 9,
  SendUserToBankError = 10,
  BackUserFromBankOk = 11,
  BackUserFromBankError = 12,
  TransactionShopInvoiceReleaseCheck,
}