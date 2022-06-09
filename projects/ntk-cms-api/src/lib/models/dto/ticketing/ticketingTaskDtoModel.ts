import { TicketingTaskModel } from '../../entity/ticketing/ticketingTaskModel';

export class TicketingTaskDtoModel extends TicketingTaskModel {
  captchaKey: string;
  captchaText: string;
}
