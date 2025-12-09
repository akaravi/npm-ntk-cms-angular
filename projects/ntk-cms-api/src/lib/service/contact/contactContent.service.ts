import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ContactImportApplyRequestDtoModel } from '../../models/dto/contact/contactImportApplyRequestDtoModel';
import { ContactImportApplyResultModel } from '../../models/dto/contact/contactImportApplyResultModel';
import { ContactImportPreviewResponseModel } from '../../models/dto/contact/contactImportPreviewResponseModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ContactContentModel } from '../../models/entity/contact/contactContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ContactContentService extends ApiCmsServerBase<
  ContactContentModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ContactContent';
  }

  ServiceGetAllWithHierarchyCategoryId(
    Id: string,
    model: FilterModel
  ): Observable<ErrorExceptionResult<ContactContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllWithHierarchyCategoryId/' +
          Id,
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceImportPreview(
    file: File
  ): Observable<ErrorExceptionResult<ContactImportPreviewResponseModel>> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const headers = this.getHeaders();
    // Remove Content-Type header to let browser set it automatically with boundary for FormData
    delete headers['Content-Type'];

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/import/preview',
        formData,
        {
          headers: headers,
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceImportApply(
    model: ContactImportApplyRequestDtoModel
  ): Observable<ErrorExceptionResult<ContactImportApplyResultModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/import/apply',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceFindByNumber(
    number: string
  ): Observable<ErrorExceptionResult<ContactContentModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/FindByNumber/' +
          number,
        {
          headers: this.getHeaders(),
        } as any
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
