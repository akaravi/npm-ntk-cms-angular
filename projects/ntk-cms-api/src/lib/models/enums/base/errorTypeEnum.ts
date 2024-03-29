export enum ErrorTypeEnum {
    None = 0,
    UserAuthenticationFail = 1,
    BusinessFail = 2,
    ApplicationError = 3,
    NotFound = 4,
    ValueInjected = 5,
    SaveChangesisZero = 6,
    CurrentSiteId = 7,
    BusinessFailAccessRowAdd = 8,
    BusinessFailAccessRowDelete = 9,
    BusinessFailAccessRowEdit = 10,
    BusinessFailAccessRowWatch = 11,
    BusinessFailDemoAccessRowAdd = 12,
    BusinessFailDemoAccessRowDelete = 13,
    BusinessFailDemoAccessRowUpdate = 14,
    DeleteContentByChildForbid = 15,
    SaveChangesisError = 16,
    IPAddressAccessDinay = 17,
    File_handlingfile = 18,
    Core_ErrorId_edit_pagemaster = 19,
    Core_Loop_creation_error_between_parent_and_child = 20,
    Core_This_module_has_already_been_dedicated_to_this_site = 21,
    Core_Page_disabled = 22,
    Article_LinkContentId_null = 23,
    Article_LinkCategoryId_Is_Null_Or_Zero = 24,
    Core_Serial_number_is_duplicate = 25,
    Core_Domain_has_already_been_registered = 26,
    Core_Domain_name_or_subdomain_has_been_created = 27,
    Core_Duplicate = 28,
    Core_Your_file_has_not_been_uploaded_to_Template = 29,
    Advertisement_This_ad_has_already_been_registered_for_this_property = 30,
    Core__Site_User_Already_Exists = 31,
    Core_Username_has_been_used_for_another_user = 32,
    Core_Only_Admin_Can_Delete_User = 33,
    Core_Enter_username = 34,
    Core_Enter_the_password = 35,
    Core_Acceess_to_register_this_site = 36,
    Core_User_group_not_found = 37,
    Core_The_username_has_already_been_registered_in_the_system = 38,
    Core_ErrorService_Entity_Check_Decision_Before_Add = 39,
    Service_Content_not_selected_correctly = 40,
    Service_LinkCategoryId_Is_Null_Or_Zero = 41,
    ApiTelegram_Your_access_number_for_making_baht_has_expired = 42,
    ApiTelegram_This_profile_has_already_been_registered = 43,
    Shop_There_is_a_duplicate_item = 44,
    ImageGallery_Content_not_selected_correctly = 45,
    Biography_Content_not_selected_correctly = 46,
    Blog_Content_not_selected_correctly = 47,
    Chart_Content_not_selected_correctly = 48,
    MovieGallery_Content_not_selected_correctly = 49,
    Product_Content_not_selected_correctly = 50,
    MusicGallery_Content_not_selected_correctly = 51,
    Biography_LinkCategoryId_Is_Null_Or_Zero = 52,
    Blog_LinkCategoryId_Is_Null_Or_Zero = 53,
    Chart_LinkCategoryId_Is_Null_Or_Zero = 54,
    ImageGallery_The_file_is_duplicate = 55,
    ImageGallery_The_relevant_category_was_not_found = 56,
    MovieGallery_The_file_is_duplicate = 57,
    MovieGallery_The_relevant_category_was_not_found = 58,
    News_Content_not_selected_correctly = 59,
    Product_LinkCategoryId_Is_Null_Or_Zero = 60,
    Polling_The_number_of_votes_allowed_for_a_poll_can_not_exceed_the_number_of_votes = 61,
    Polling_The_relevant_category_was_not_found = 62,
    News_LinkCategoryId_Is_Null_Or_Zero = 63,
    Shop_The_relevant_category_was_not_found = 64,
    Job_This_ad_has_already_been_registered_for_this_property = 65,
    Ticket_Dupplicate_Data = 66,
    Job_LinkParentId_is_invalid = 67,
    Shop_To_create_an_invoice_the_site_user_or_system_user_must_be_specified = 68,
    Shop_It_is_not_known_to_create_a_vendor_website_invoice = 69,
    Member_Vertical_values_are_empty = 70,
    bankPeyment_The_unit_factor_of_the_store_should_be_greater_than_zero = 71,
    Vehicle_This_ad_has_already_been_registered_for_this_property = 72,
    Workflow_LinkParentId_is_not_from_the_current_site = 73,
    Resrvation_Please_enter_the_date = 74,
    Resrvation_This_has_already_been_booked = 75,
    Resrvation_The_expiration_date_of_this_reservation_has_expired = 76,
    News_Entries_can_not_be_connected = 77,
    Estate_This_ad_has_already_been_registered_for_this_property = 78,
    Discount_DiscountGroup_Is_Null = 79,
    Discount_This_Card_Deactivated = 80,
    Discount_This_Card_Has_Sold = 81,
    Discount_This_Owner_Card_Is_Diffrent = 82,
    Reservation_The_date_has_already_been_registered = 83,
    Discount_Duplicate_PersonSeller = 84,
    Discount_Please_Enter_Person_Information = 85,
    Chat_Vertical_values_are_empty = 86,
    File_Loop_creation_error_between_parent_and_child = 87,
    Application_Your_access_number_for_making_baht_has_expired = 88,
    ExpireDateValue = 89,
    UserTicketIsNull = 90,
    InputEntityIsNull = 91,
    The_site_can_not_be_your_parent = 92,
    ErrorMessage_Reached_Maximum_Capacity = 93,
    The_site_link_is_empty = 94,
    Folder_not_found = 95,
    Error_Creating_Folder = 96,
    File_Not_Find = 97,
    Your_new_file_has_not_been_uploaded_correctly = 98,
    Shop_Invoice_not_found = 99,
    FilteringQuery_Force_To_Null_query_Incorect_FilterModel = 100,
    You_do_not_have_enough_access_to_this_operation = 101,
    You_do_not_have_access_levels_for_serial_registration_of_other_sites = 102,
    Error_replacing_file_on_server = 103,
    Section_not_found_for_get_tickets = 104,
    This_series_has_already_been_activated_for_you = 105,
    This_serial_is_disabled = 106,
    The_duration_of_the_use_of_this_series_has_been_completed = 107,
    The_allowed_number_of_this_series_is_over = 108,
    Site_not_selected = 109,
    Modules_list_is_empty = 110,
    Website_Specifications_is_empty = 111,
    Website_domain_Specification_is_empty = 112,
    Website_type_not_selected = 113,
    Web_management_properties_are_empty = 114,
    Username_is_not_logged_in_webmaster = 115,
    Web_admin_password_not_logged = 116,
    Your_requested_access_type_was_not_found = 117,
    Your_requested_website_type_was_not_found = 118,
    This_domain_has_already_been_registered_with_this_subdomain = 119,
    This_domain_has_already_been_registered = 120,
    This_domain_has_already_been_registered_with_Alice_Domain_with_this_subdomain = 121,
    This_domain_has_already_been_registered_with_Alice_Damien = 122,
    User_not_found = 123,
    The_account_has_expired_Contact_management = 124,
    The_account_is_inactive_status_Contact_management = 125,
    The_account_is_in_the_status_of_deletion_Contact_management = 126,
    A_link_to_your_email_address_has_been_sent = 127,
    Core_oldPassword_IsNullOrEmpty = 128,
    Core_newPassword_IsNullOrEmpty = 129,
    Core_userTicket_Notfound = 130,
    Core_userTicket_RecordStatus_NotAvailable = 131,
    Core_Password_with_old_password_is_not_equal = 132,
    Core_User_information_not_found = 133,
    Core_Link_password_reminder_not_found = 134,
    Core_Reminder_link_used_previously_apply_again = 135,
    Core_User_not_found = 136,
    Core_The_account_has_expired_Contact_management = 137,
    Core_The_account_is_in_the_status_of_deletion_Contact_management = 138,
    Core_The_account_is_inactive_status_Contact_management = 139,
    Core_This_site_is_not_in_your_collection = 140,
    Core_This_user_has_high_access_and_you_do_not_have_permission_to_login = 141,
    Core_Your_account_has_been_disabled_for_1_hour = 142,
    Core_Username_Or_Password_Incorrect = 143,
    Core_Your_account_on_this_website_is_disabled_by_contacting_the_management = 144,
    Core_You_have_another_access_type_on_this_website_and_your_requested_access_is_not_possible = 145,
    Core_This_type_of_access_can_not_be_automatically_added_to_the_sites = 146,
    Core_Your_requested_access_type_was_not_found = 147,
    Core_Your_requested_access_type_was_not_added_to_the_system = 148,
    Core_You_do_not_have_an_account_on_this_website = 149,
    Core_Activation_Code_is_invalid = 150,
    Core_FilteringQuery_Force_To_Null_query_Incorect_FilterModel = 151,
    bankPeyment_WebServiceUrl_IsNullOrEmpty = 152,
    bankPeyment_ResCode = 153,
    bankPeyment_webServiceTimestamp = 154,
    bankPeyment_bankPeymentPayRequest = 155,
    bankPeyment_Error_RedirectInterfaceUrl_IsNullOrEmpty = 156,
    bankPeyment_successful = 157,
    bankPeyment_saleReferenceId_smaller_than_1000 = 158,
    bankPeyment_RefId_IsNullOrEmpty = 159,
    bankPeyment_saleReferenceId_Is_Ziro = 160,
    bankPeyment_saleOrderId_Is_Ziro = 161,
    bankPeyment_stampValues_ResCode_not_0 = 162,
    bankPeyment_requestSaleOrderId_not_stampValuesOrderId = 163,
    bankPeyment_requestRefId_not_stampValuesRefId = 164,
    bankPeyment_WebServiceCheck_is_not_0 = 165,
    bankPeyment_TransactionComplete_Is_OK = 166,
    bankPeyment_WebServiceComplete = 167,
    bankPeyment_WebServiceTimestamp_Is_O = 168,
    bankPeyment_WebCallBackUrl_IsNullOrEmpty = 169,
    bankPeyment_TransactionCheck_Is_Ok = 170,
    bankPeyment_RedirectInterfaceUrl_IsNullOrEmpty = 171,
    bankPeyment_request_ResNum_isnot_stampValues_ResNum = 172,
    bankPeyment_RefNum_IsNullOrEmpty = 173,
    bankPeyment_inputClass_State_Is_Not_Ok = 174,
    bankPeyment_verifyTransaction_Value_Differnt_By_Amount = 175,
    bankPeyment_WebServiceCheck_smaller_than_0 = 176,
    bankPeyment_inputClass_State_Not_equal_to_100 = 177,
    bankPeyment_requestStatus_not_ok = 178,
    bankPeyment_requestAuthority_not_stampValuesAuthority = 179,
    bankPeyment_IsNullOrEmpty_inputClassAuthority = 180,
    bankPeyment_WebServiceCheck_is_not_100 = 181,
    bankPeyment_Success_RefId = 182,
    bankPeyment_You_do_not_have_enough_access_to_this_operation = 183,
    bankPeyment_NTK_Custom_Error_Render_Type_Error = 184,
    bankPeyment_NTK_Custom_Error_Render_Cast_Error = 185,
    bankPeyment_Transaction_details_are_empty = 186,
    bankPeyment_Input_value_is_empty = 187,
    bankPeyment_Bank_profile_is_empty = 188,
    Email_Send_Sucessfull = 189,
    Email_Send_Not_Sucessfull = 190,
    Email_You_do_not_have_enough_access_to_this_operation = 191,
    Email_Send_path_is_not_specified = 192,
    Email_Api_Item_is_null = 193,
    Email_Your_request_is_not_valid = 194,
    Email_EmailTask_PrivateSiteConfig_is_null = 195,
    Email_EmailTask_PublicConfig_is_null = 196,
    Email_NTK_Custom_Error_Render_Type_Error = 197,
    Email_NTK_Custom_Error_Render_Cast_Error = 198,
    Application_You_do_not_have_enough_access_to_this_operation = 199,
    Object_Vertical_values_are_empty = 200,
    Shop_There_is_not_enough_inventory = 201,
    Shop_Invalid_commodity_system_code = 202,
    ContentBlocked,
    ContentNeedAdminControl,
    ContentNotAvailable,
    ForbidDateSendStart,
    ForbidDateSendEnd,
    NotFoundPrivateSiteConfig,
    TaskScheduler_You_do_not_have_enough_access_to_this_operation,
    CoreSite_Access_to_this_section_is_limited_to_the_entire_system_management,
    Email_Entries_can_not_be_connected,
    Member_LinkMemberUserId_Is_Null,
    Object_LinkMemberUserId_Is_Null,
    Shop_You_do_not_have_enough_access_to_this_operation,
    Reservation_Content_not_selected_correctly,
    Reservation_LinkCategoryId_Is_Null_Or_Zero,
    Reservation_Entries_can_not_be_connected,
    PermissionIsAuthenticatedFail,
    PermissionIsAuthenticatedDeviceIdFail,
    AntiInjectionToken,
    ErrorLoopContent,
    bankPeyment_Bank_token_is_empty,
    LinkManagement_The_site_link_is_empty,
    LinkManagement_The_URL_is_not_in_accordance_with_the_URL_format,
    Error_was_successfully_logged,
    MemBer_This_Item_has_already_been_registered,
    Member_The_ability_to_move_access_from_a_website_to_another_website_is_not_possible,
    Shop_Content_not_selected_correctly,
    Please_Login,
    Comment_LinkContentId_null,
    Comment_Text_null,
    Comment_Writer_null,
    Content_LinkCategoryId_Is_Null_Or_Zero,
    WebDesigner_The_site_link_is_empty,
    WebDesigner_The_URL_is_not_in_accordance_with_the_URL_format,
    Core_Email_Is_Null,
    Core_Email_Confermed,
    Core_Mobile_Is_Null,
    Core_Mobile_Confermed,
    Core_ActivateCode_Is_Null,
    Exist_Similar_Data,
    EmptyData,
    CaptchaIncorect,
    Core_Not_Find,
    Core_InputValueIsNull,
    Application_Theme_Is_Null,
    Length_Max,
    Ticketing_LinkTaskId_Is_Closed,
    Ticketing_LinkTaskId_Is_Null,
    Ticketing_LinkTaskId_Is_Not_Correct,
    Shop_Invoice_Old_Is_Open,
    ID_Is_Ziro,
    LinkParent_is_invalid,
    ResultAccessBase_FieldsInfo_IS_NULL,
    Donate_The_site_link_is_empty,
    Donate_The_URL_is_not_in_accordance_with_the_URL_format,
    Captcha_Need,
    This_serial_Error_DatePeriodStart,
    This_serial_Error_DatePeriodEnd,
    OnlyAdminAccountAccess,
    Input_value_is_empty,
    ErrorApi,
    Format_Not_Correct
}
