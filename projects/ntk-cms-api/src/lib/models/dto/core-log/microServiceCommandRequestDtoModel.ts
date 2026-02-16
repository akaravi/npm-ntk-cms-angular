import { MicroServiceCommandTypeEnum } from '../../enums/core-log/microServiceCommandTypeEnum';

/**
 * مدل درخواست ارسال دستور به میکروسرویس
 */
export class MicroServiceCommandRequestDtoModel {
  commandType: MicroServiceCommandTypeEnum;
  payloadJson?: string;
}
