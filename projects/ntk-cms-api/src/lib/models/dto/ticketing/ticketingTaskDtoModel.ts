import { TicketingTaskModel } from '../../entity/ticketing/ticketingTaskModel';

export class TicketingTaskDtoModel extends TicketingTaskModel {
  CaptchaKey: string;
  CaptchaText: string;
}
