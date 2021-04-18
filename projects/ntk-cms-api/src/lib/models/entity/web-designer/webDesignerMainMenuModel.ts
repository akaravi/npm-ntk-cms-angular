import { EnumCmsSiteMenuAreaType } from '../../enums/enumCmsSiteMenuAreaType';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class WebDesignerMainMenuModel  extends BaseModuleEntity<string>{

    LongId: number;
    Title: string;
    AreaType: EnumCmsSiteMenuAreaType;
    JsonValues: string;

}
