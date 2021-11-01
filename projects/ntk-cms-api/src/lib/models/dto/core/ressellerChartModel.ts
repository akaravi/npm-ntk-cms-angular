import { CoreSiteModel } from '../../entity/core-main/coreSiteModel';
import { CoreUserModel } from '../../entity/core-main/coreUserModel';

export class RessellerChartModel {
  LinkSiteId?: number;
  LinkUserId?: number;
  Site: CoreSiteModel;
  User: CoreUserModel;
  SiteChilds: RessellerChartModel[];
  UserChilds: RessellerChartModel[];
}
