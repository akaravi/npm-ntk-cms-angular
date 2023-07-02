import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { ApiServerBase } from './apiServerBase.service';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { EnumRecordStatus } from '../../models/enums/base/enumRecordStatus';
import { CoreModuleMemoDtoModel } from '../../models/dto/core-module/coreModuleMemoDtoModel';
import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';
import { IApiCmsServerBase } from './iApiCmsServerBase';
import { CoreModuleDataMemoModel } from '../../models/entity/core-module-data/coreModuleDataMemoModel';
import { ExportFileModel } from '../../models/entity/base/exportFileModel';
import { CoreModuleShowKeyDtoModel } from '../../models/dto/core-module/coreModuleShowKeyDtoModel';
import { CoreModuleLogShowKeyModel } from '../../models/entity/core-module-log/coreModuleLogShowKeyModel';
import { CoreModuleDataCommentModel } from '../../models/entity/core-module-data/coreModuleDataCommentModel';
import { CoreModuleCommentDtoModel } from '../../models/dto/core-module/coreModuleCommentDtoModel';


@Injectable()
export class ApiCmsServerBase<TModel, TKey,TFilterModel>  extends ApiServerBase implements IApiCmsServerBase {
  ServiceViewModel(): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ViewModel', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
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
  ServiceGetOneById(id: TKey): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/' + id, {
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
  ServiceSetStatus(id: TKey,recordStatus:EnumRecordStatus): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SetStatus/' + id+"/"+recordStatus, {
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

  ServiceExportFileGetOne(id:TKey,model: ExportFileModel): Observable<ErrorExceptionResultExportFile> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new ExportFileModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ExportFile/'+ id, model, {
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

  ServiceEdit(model: TModel): Observable<ErrorExceptionResult<TModel>> {
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
  ServiceMemoAdd(model: CoreModuleMemoDtoModel): Observable<ErrorExceptionResultBase> {
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
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoDelete/'+ id, {
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
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MemoGetAll/'+ id, {
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

ServiceCommentAdd(model: CoreModuleCommentDtoModel): Observable<ErrorExceptionResultBase> {
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
    .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentDelete/'+ id, {
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
    .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CommentGetAll/'+ id, {
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
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ShowKeyGetAll/'+ id, {
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
