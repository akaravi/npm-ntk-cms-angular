export class EstatePropertyActionSendSmsDtoModel{
  id:string ;
  /**Action */
  actionSendSmsToMe: boolean;
  actionSendSmsToEstateCustomer: boolean;
  actionSendSmsToEstateAgency: boolean;
  actionSendSmsToEstateUser: boolean;
  actionSendSmsToCustomerOrder: boolean;
  actionSendSmsToContactNumber: string;
}
