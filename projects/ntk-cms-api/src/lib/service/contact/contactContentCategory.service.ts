import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ContactContentCategoryModel } from '../../models/entity/contact/contactContentCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ContactContentCategoryService extends ApiCmsServerBase<
  ContactContentCategoryModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ContactContentCategory';
  }
}
