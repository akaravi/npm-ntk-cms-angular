export enum EnumUserClaimKinds {
  /// <summary>
  /// کد ملی
  /// </summary>
  NationalId = 0,

  /// <summary>
  /// قرارداد فروش
  /// </summary>
  SaleContract = 1,
  /// <summary>
  /// شماره موبایل
  /// </summary>
  MobileNumber = 2,
  /// <summary>
  /// آدرس ایمیل
  /// </summary>
  EmailAddress = 3,
  /// <summary>
  /// شماره حساب
  /// </summary>
  BankAccountNumber = 4,
  /// <summary>
  /// آدرس یکتای کلاینت
  /// </summary>
  DeviceId = 5,
  /// <summary>
  /// شماره یکتایی که از نرم افزار حسابداری دریافت می شود
  /// اگر شماره یکتا تغییر کرد بایستی برنامه فروش آنلاین را متوقف کند
  /// </summary>
  AccountingGuidKey = 6,
  /// <summary>
  /// شماره حساب بانکی
  /// </summary>
  BankAccountCardNumber = 7,
  /// <summary>
  /// نام شخص
  /// اگر نام شخص با نام شخص در شماره حساب بانکی همخوانی نداشت باید ادعا غیرفعال شود
  /// </summary>
  Name = 8,
  /// <summary>
  /// نام خانوادگی شخص
  /// مثل نام شخص
  /// </summary>
  Family = 9,
  /// <summary>
  /// شماره شبا
  /// </summary>
  ISBNCardNumber = 10,
  /// <summary>
  /// تصویر چهره کاربر - ممکن است استفاده نشود
  /// </summary>
  UserFaceImage = 11,
  /// <summary>
  /// نام فروشگاه تغییر کند
  /// </summary>
  SiteTitle = 12,
  /// <summary>
  /// پروانه کسب و موارد دیگر
  /// </summary>
  UserDocument = 13
}
