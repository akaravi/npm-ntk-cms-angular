import { ActionGoStepEnum } from '../../enums/base/actionGoStepEnum';
export class EditStepDtoModel<TKey> {
  id: TKey;
  centerId: TKey;
  actionGo: ActionGoStepEnum;
}

export class EditStepDtoNModel<TKeyOne, TKeyTwo> {
  idOne: TKeyOne;
  idTwo: TKeyTwo;
  centerIdOne: TKeyOne;
  centerId: TKeyTwo;
  actionGo: ActionGoStepEnum;
}
