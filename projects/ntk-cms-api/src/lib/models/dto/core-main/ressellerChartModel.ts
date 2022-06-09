import { CoreSiteModel } from '../../entity/core-main/coreSiteModel';
import { CoreUserModel } from '../../entity/core-main/coreUserModel';

export class RessellerChartModel {
  linkSiteId?: number;
  linkUserId?: number;
  site: CoreSiteModel;
  user: CoreUserModel;
  siteChilds: RessellerChartModel[];
  userChilds: RessellerChartModel[];
}
