import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreModuleDataCommentDtoModel } from '../../models/dto/core-module/coreModuleDataCommentDtoModel';
import { CoreModuleDataMemoDtoModel } from '../../models/dto/core-module/coreModuleDataMemoDtoModel';
import { CoreModuleDataTaskDtoModel } from '../../models/dto/core-module/coreModuleDataTaskDtoModel';
import { CoreModuleShowKeyDtoModel } from '../../models/dto/core-module/coreModuleShowKeyDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { ExportFileModel } from '../../models/entity/base/exportFileModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';
import { CoreModuleDataCommentModel } from '../../models/entity/core-module-data/coreModuleDataCommentModel';
import { CoreModuleDataMemoModel } from '../../models/entity/core-module-data/coreModuleDataMemoModel';
import { CoreModuleDataPinModel } from '../../models/entity/core-module-data/coreModuleDataPinModel';
import { CoreModuleDataTaskModel } from '../../models/entity/core-module-data/coreModuleDataTaskModel';
import { CoreModuleLogShowKeyModel } from '../../models/entity/core-module-log/coreModuleLogShowKeyModel';
import { RecordStatusEnum } from '../../models/enums/base/recordStatusEnum';
import { ApiServerBase } from './apiServerBase.service';
import { IApiCmsServerBase } from './iApiCmsServerBase';



@Injectable()
export class ApiCmsServerBase<TModel, TKey, TFilterModel> extends ApiServerBase implements IApiCmsServerBase {
  ServiceViewModel(): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ViewModel', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceReportFileGetAll(): Observable<ErrorExceptionResult<CoreModuleEntityReportFileModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ReportFileGetAll', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAll(model: TFilterModel): Observable<ErrorExceptionResult<TModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/getAll', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllEditor(model: TFilterModel): Observable<ErrorExceptionResult<TModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/getAllEditor', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetOneById(id: TKey, cashApiSeconds?: number): Observable<ErrorExceptionResult<TModel>> {
    //! optimaze call api
    const serviceNameKay = 'ServiceGetOneById' + '_' + id;
    if (this.cashApiIsValid(serviceNameKay, cashApiSeconds))
      return of(this.cachApiResult[serviceNameKay]);
    //! optimaze call api
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          //! optimaze call api
          if (cashApiSeconds > 0) {
            this.cachApiResult[serviceNameKay] = ret;
            this.cachApiResult[serviceNameKay].dateResult = new Date();
          }
          //! optimaze call api
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetCount(model: FilterModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/Count', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceSetStatus(id: TKey, recordStatus: RecordStatusEnum): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SetStatus/' + id + "/" + recordStatus, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetExist(model: FilterModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/exist', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceExportFile(model: FilterModel): Observable<ErrorExceptionResultExportFile> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ExportFile', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheckExportFile(ret);
        }),
      );
  }

  ServiceExportFileGetOne(id: TKey, model: ExportFileModel): Observable<ErrorExceptionResultExportFile> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new ExportFileModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ExportFile/' + id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheckExportFile(ret);
        }),
      );
  }
  ServiceAdd(model: TModel): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceEdit(model: TModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .put(this.getBaseUrl() + this.getModuleControllerUrl() + '/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceDelete(id: TKey): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .delete(this.getBaseUrl() + this.getModuleControllerUrl() + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceDeleteList(ids: TKey[]): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/DeleteList', ids, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceDeleteEntity(model: TModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/delete', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  /**Memo */
  ServiceMemoAdd(model: CoreModuleDataMemoDtoModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoAdd', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceMemoDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoDelete/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceMemoGetAll(): Observable<ErrorExceptionResult<CoreModuleDataMemoModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoGetAll/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceMemoGetAllEntity(id: TKey): Observable<ErrorExceptionResult<CoreModuleDataMemoModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoGetAll/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  /**Memo */
  /**Pin */
  ServicePinAdd(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PinAdd/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServicePinDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PinDelete/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServicePinCheck(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PinCheck/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServicePinGetAll(): Observable<ErrorExceptionResult<CoreModuleDataPinModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PinGetAll/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServicePinGetAllEntity(id: TKey): Observable<ErrorExceptionResult<CoreModuleDataPinModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PinGetAll/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  /**Pin */
  /**Task */
  ServiceTaskAdd(model: CoreModuleDataTaskDtoModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskAdd', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceTaskDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskDelete/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceTaskGetAll(): Observable<ErrorExceptionResult<CoreModuleDataTaskModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskGetAll/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceTaskGetAllEntity(id: TKey): Observable<ErrorExceptionResult<CoreModuleDataTaskModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskGetAll/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  /**Task */
  /**comment */

  ServiceCommentAdd(model: CoreModuleDataCommentDtoModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentAdd', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCommentDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentDelete/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCommentGetAll(): Observable<ErrorExceptionResult<CoreModuleDataCommentModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentGetAll/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCommentGetAllEntity(id: TKey): Observable<ErrorExceptionResult<CoreModuleDataCommentModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentGetAll/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  /**comment */
  ServiceShowKeyAdd(model: CoreModuleShowKeyDtoModel): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ShowKeyAdd', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceShowKeyGetAll(id: TKey): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ShowKeyGetAll/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
