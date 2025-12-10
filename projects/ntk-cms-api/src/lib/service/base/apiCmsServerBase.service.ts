import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, retry } from 'rxjs/operators';
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
import { RecordAdminStatusEnum, RecordStatusEnum } from '../../models/enums/base/recordStatusEnum';
import { ApiServerBase } from './apiServerBase.service';
import { IApiCmsServerBase } from './iApiCmsServerBase';

@Injectable()
export class ApiCmsServerBase<TModel, TKey, TFilterModel>
  extends ApiServerBase
  implements IApiCmsServerBase
{
  ServiceViewModel(): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ViewModel', {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceReportFileGetAll(): Observable<
    ErrorExceptionResult<CoreModuleEntityReportFileModel>
  > {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ReportFileGetAll',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        map((ret: any) => {
          return ret;
        })
      );
  }

  ServiceGetAll(model: TFilterModel): Observable<ErrorExceptionResult<TModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/getAll',
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
  ServiceGetAllEditor(
    model: TFilterModel
  ): Observable<ErrorExceptionResult<TModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/getAllEditor',
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
  ServiceGetOneById(
    id: TKey,
    cashApiSeconds: number = 0
  ): Observable<ErrorExceptionResult<TModel>> {
    //! optimaze call api
    const serviceNameKay = this.constructor.name + '_ServiceGetOneById_' + id;
    return from(
      this.cashApiIsValid(serviceNameKay, cashApiSeconds)
    ).pipe(
      mergeMap((isValid) => {
        if (isValid) return of(this.cachApiResult[serviceNameKay]);
        //! optimaze call api
        // this.loadingStatus=true;
        return this.http
          .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/' + id, {
            headers: this.getHeaders(),
          })
          .pipe(
            retry(this.configApiRetry),

            map((ret: any) => {
              //! optimaze call api
              if (cashApiSeconds > 0) {
                this.cashApiVlaueSet(serviceNameKay, ret);
              }
              //! optimaze call api
              return ret;
            })
          );
      })
    );
  }

  ServiceGetCount(model: FilterModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Count',
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
  ServiceSetStatus(
    id: TKey,
    recordStatus: RecordStatusEnum
  ): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SetRecordStatus/' +
          id +
          '/' +
          recordStatus,
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
  ServiceSetAdminStatus(
    id: TKey,
    recordAdminStatus: RecordAdminStatusEnum
  ): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/SetRecordAdminStatus/' +
          id +
          '/' +
          recordAdminStatus,
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
  ServiceGetExist(model: FilterModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/exist',
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

  ServiceExportFile(
    model: FilterModel
  ): Observable<ErrorExceptionResultExportFile> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ExportFile',
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

  ServiceExportFileGetOne(
    id: TKey,
    model: ExportFileModel
  ): Observable<ErrorExceptionResultExportFile> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new ExportFileModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ExportFile/' + id,
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
  ServiceAdd(model: TModel): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
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

        map((ret: any) => {
          return ret;
        })
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

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceDeleteList(ids: TKey[]): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/DeleteList',
        ids,
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
  ServiceDeleteEntity(model: TModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/delete',
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
  /**Memo */
  ServiceMemoAdd(
    model: CoreModuleDataMemoDtoModel
  ): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoAdd',
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
  ServiceMemoDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoDelete/' + id,
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
  ServiceMemoGetAll(): Observable<
    ErrorExceptionResult<CoreModuleDataMemoModel>
  > {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoGetAll/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceMemoGetAllEntity(
    id: TKey
  ): Observable<ErrorExceptionResult<CoreModuleDataMemoModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoGetAll/' + id,
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
  /**Memo */
  /**Pin */
  ServicePinAdd(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/PinAdd/' + id,
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
  ServicePinDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/PinDelete/' + id,
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
  ServicePinCheck(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/PinCheck/' + id,
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
  ServicePinGetAll(): Observable<ErrorExceptionResult<CoreModuleDataPinModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PinGetAll/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServicePinGetAllEntity(
    id: TKey
  ): Observable<ErrorExceptionResult<CoreModuleDataPinModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/PinGetAll/' + id,
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
  /**Pin */
  /**Task */
  ServiceTaskAdd(
    model: CoreModuleDataTaskDtoModel
  ): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskAdd',
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
  ServiceTaskDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskDelete/' + id,
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
  ServiceTaskGetAll(): Observable<
    ErrorExceptionResult<CoreModuleDataTaskModel>
  > {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskGetAll/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceTaskGetAllEntity(
    id: TKey
  ): Observable<ErrorExceptionResult<CoreModuleDataTaskModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskGetAll/' + id,
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
  /**Task */
  /**comment */

  ServiceCommentAdd(
    model: CoreModuleDataCommentDtoModel
  ): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentAdd',
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
  ServiceCommentDelete(id: string): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/CommentDelete/' +
          id,
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
  ServiceCommentGetAll(): Observable<
    ErrorExceptionResult<CoreModuleDataCommentModel>
  > {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentGetAll/',
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
  ServiceCommentGetAllEntity(
    id: TKey
  ): Observable<ErrorExceptionResult<CoreModuleDataCommentModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/CommentGetAll/' +
          id,
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

  /**comment */
  ServiceShowKeyAdd(
    model: CoreModuleShowKeyDtoModel
  ): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>> {
    // this.loadingStatus=true;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ShowKeyAdd',
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
  ServiceShowKeyGetAll(
    id: TKey
  ): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/ShowKeyGetAll/' +
          id,
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
}
