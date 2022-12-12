import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { CoreModuleMemoDtoModel } from '../../models/dto/core-module/coreModuleMemoDtoModel';
import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';
import { CoreModuleLogMemoModel } from '../../models/entity/core-module-log/coreModuleLogMemoModel';
import { ExportFileModel } from '../../models/entity/base/exportFileModel';



export interface IApiCmsServerBase{
  
    ServiceMemoAdd(model: CoreModuleMemoDtoModel): Observable<ErrorExceptionResultBase>;
    ServiceMemoGetAll(id: any): Observable<ErrorExceptionResult<CoreModuleLogMemoModel>>;

    ServiceGetCount(model: FilterModel): Observable<ErrorExceptionResultBase>;
    ServiceGetExist(model: FilterModel): Observable<ErrorExceptionResultBase>;
    ServiceDelete(id: any): Observable<ErrorExceptionResultBase>;

    ServiceReportFileGetAll(): Observable<ErrorExceptionResult<CoreModuleEntityReportFileModel>>;
    ServiceExportFile(model: FilterModel): Observable<ErrorExceptionResultExportFile>;
    ServiceExportFileGetOne(id:any,model: ExportFileModel): Observable<ErrorExceptionResultExportFile>;
  }