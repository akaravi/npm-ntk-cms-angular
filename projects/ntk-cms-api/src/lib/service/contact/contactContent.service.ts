import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ContactContentModel } from '../../models/entity/contact/contactContentModel';
import { Injectable } from '@angular/core';


@Injectable()
export class ContactContentService extends ApiCmsServerBase<ContactContentModel, string>  {
  getModuleControllerUrl(): string {
    return 'ContactContent';
  }
}
