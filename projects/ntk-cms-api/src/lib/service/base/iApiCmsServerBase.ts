import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { ErrorExceptionResultExportFile } from '../../models/entity/base/errorExceptionResultExportFile';
import { CoreModuleMemoDtoModel } from '../../models/dto/core-module/coreModuleMemoDtoModel';
import { CoreModuleEntityReportFileModel } from '../../models/entity/core-main/coreModuleEntityReportFileModel';
import { CoreModuleLogMemoModel } from '../../models/entity/core-module-log/coreModuleLogMemoModel';
import { ExportFileModel } from '../../models/entity/base/exportFileModel';
import { CoreModuleShowKeyDtoModel } from '../../models/dto/core-module/coreModuleShowKeyDtoModel';
import { CoreModuleLogShowKeyModel } from '../../models/entity/core-module-log/coreModuleLogShowKeyModel';



export interface IApiCmsServerBase{



    ServiceGetCount(model: FilterModel): Observable<ErrorExceptionResultBase>;
    ServiceGetExist(model: FilterModel): Observable<ErrorExceptionResultBase>;
    ServiceDelete(id: any): Observable<ErrorExceptionResultBase>;

    ServiceReportFileGetAll(): Observable<ErrorExceptionResult<CoreModuleEntityReportFileModel>>;
    ServiceExportFile(model: FilterModel): Observable<ErrorExceptionResultExportFile>;
    ServiceExportFileGetOne(id:any,model: ExportFileModel): Observable<ErrorExceptionResultExportFile>;

    ServiceMemoAdd(model: CoreModuleMemoDtoModel): Observable<ErrorExceptionResultBase>;
    ServiceMemoDelete(id: string): Observable<ErrorExceptionResultBase>;
    ServiceMemoGetAll(): Observable<ErrorExceptionResult<CoreModuleLogMemoModel>>;
    ServiceMemoGetAllEntity(id: any): Observable<ErrorExceptionResult<CoreModuleLogMemoModel>>;

    ServiceShowKeyAdd(model: CoreModuleShowKeyDtoModel):  Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>> ;
    ServiceShowKeyGetAll(id: any): Observable<ErrorExceptionResult<CoreModuleLogShowKeyModel>>;
  }
