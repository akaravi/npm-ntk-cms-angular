import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';

import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';
import { CoreModuleDataMemoModel } from '../../models/entity/core-module-data/coreModuleDataMemoModel';
import { ExportFileModel } from '../../models/entity/base/exportFileModel';
import { CoreModuleShowKeyDtoModel } from '../../models/dto/core-module/coreModuleShowKeyDtoModel';
import { CoreModuleLogShowKeyModel } from '../../models/entity/core-module-log/coreModuleLogShowKeyModel';

import { CoreModuleDataCommentModel } from '../../models/entity/core-module-data/coreModuleDataCommentModel';
import { CoreModuleDataTaskDtoModel } from '../../models/dto/core-module/coreModuleDataTaskDtoModel';
import { CoreModuleDataTaskModel } from '../../models/entity/core-module-data/coreModuleDataTaskModel';
import { CoreModuleDataMemoDtoModel } from '../../models/dto/core-module/coreModuleDataMemoDtoModel';
import { CoreModuleDataPinModel } from '../../models/entity/core-module-data/coreModuleDataPinModel';
import { CoreModuleDataCommentDtoModel } from '../../models/dto/core-module/coreModuleDataCommentDtoModel';

export interface IApiCmsServerBase {

  ServiceGetCount(model: FilterModel): Observable<ErrorExceptionResultBase>;
  ServiceGetExist(model: FilterModel): Observable<ErrorExceptionResultBase>;
  ServiceDelete(id: any): Observable<ErrorExceptionResultBase>;

  ServiceReportFileGetAll(): Observable<ErrorExceptionResult<CoreModuleEntityReportFileModel>>;
  ServiceExportFile(model: FilterModel): Observable<ErrorExceptionResultExportFile>;
  ServiceExportFileGetOne(id: any, model: ExportFileModel): Observable<ErrorExceptionResultExportFile>;
  /**memo */
  ServiceMemoAdd(model: CoreModuleDataMemoDtoModel): Observable<ErrorExceptionResultBase>;
  ServiceMemoDelete(id: string): Observable<ErrorExceptionResultBase>;
  ServiceMemoGetAll(): Observable<ErrorExceptionResult<CoreModuleDataMemoModel>>;
  ServiceMemoGetAllEntity(id: any): Observable<ErrorExceptionResult<CoreModuleDataMemoModel>>;
  /**memo */
  /**Pin */
  ServicePinAdd(id: string): Observable<ErrorExceptionResultBase>;
  ServicePinCheck(id: string): Observable<ErrorExceptionResultBase>;
  ServicePinDelete(id: string): Observable<ErrorExceptionResultBase>;
  ServicePinGetAll(): Observable<ErrorExceptionResult<CoreModuleDataPinModel>>;
  ServicePinGetAllEntity(id: any): Observable<ErrorExceptionResult<CoreModuleDataPinModel>>;
  /**Pin */
  /**task */
  ServiceTaskAdd(model: CoreModuleDataTaskDtoModel): Observable<ErrorExceptionResultBase>;
  ServiceTaskDelete(id: string): Observable<ErrorExceptionResultBase>;
  ServiceTaskGetAll(): Observable<ErrorExceptionResult<CoreModuleDataTaskModel>>;
  ServiceTaskGetAllEntity(id: any): Observable<ErrorExceptionResult<CoreModuleDataTaskModel>>;
  /**task */
  /**Comment */
  ServiceCommentAdd(model: CoreModuleDataCommentDtoModel): Observable<ErrorExceptionResultBase>;
  ServiceCommentDelete(id: string): Observable<ErrorExceptionResultBase>;
  ServiceCommentGetAll(): Observable<ErrorExceptionResult<CoreModuleDataCommentModel>>;
  ServiceCommentGetAllEntity(id: any): Observable<ErrorExceptionResult<CoreModuleDataCommentModel>>;
  /**Comment */
  ServiceShowKeyAdd(model: CoreModuleShowKeyDtoModel): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>>;
  ServiceShowKeyGetAll(id: any): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>>;
}
