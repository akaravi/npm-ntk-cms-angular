import { ActionGoStepEnum } from '../../enums/base/actionGoStepEnum';
export class EditStepDtoModel<TKey> {
  id: TKey;
  centerId: TKey;
  actionGo: ActionGoStepEnum;
}
