import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { CoreModuleMemoDtoModel } from '../../models/dto/core-module/coreModuleMemoDtoModel';
import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';



export interface IApiCmsServerBase{
    ServiceGetAllReportFile(): Observable<ErrorExceptionResult<CoreModuleEntityReportFileModel>>;
    ServiceMemoAdd(model: CoreModuleMemoDtoModel): Observable<ErrorExceptionResultBase>;
    ServiceGetCount(model: FilterModel): Observable<ErrorExceptionResultBase>;
    ServiceGetExist(model: FilterModel): Observable<ErrorExceptionResultBase>;
    ServiceExportFile(model: FilterModel): Observable<ErrorExceptionResultExportFile>;
  }