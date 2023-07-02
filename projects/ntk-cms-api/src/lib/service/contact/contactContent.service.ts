import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ContactContentModel } from '../../models/entity/contact/contactContentModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class ContactContentService extends ApiCmsServerBase<ContactContentModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ContactContent';
  }
}
