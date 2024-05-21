import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ContactContentModel } from '../../models/entity/contact/contactContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ContactContentService extends ApiCmsServerBase<ContactContentModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ContactContent';
  }
}
