// import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
// import { Injectable } from '@angular/core';
// import { SmsMainApiPathPrivateSiteConfigModel } from '../../models/entity/sms/smsMainApiPathPrivateSiteConfigModel';
// import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
// import { Observable } from 'rxjs';
// import { map, retry } from 'rxjs/operators';
// import { SmsMainApiPathPrivateSiteConfigAliasJsonModel } from '../../models/entity/sms/smsMainApiPathPrivateSiteConfigAliasJsonModel';
// import { SmsApiSendResultModel } from '../../models/dto/sms/smsApiSendResultModel';
// import { SmsApiSendTestDtoModel } from '../../models/dto/sms/smsApiSendTestDtoModel';


// @Injectable()
// export  class SmsMainApiPathPrivateSiteConfigService extends ApiCmsServerBase<
//   SmsMainApiPathPrivateSiteConfigModel,
//   string
// > {
//   getModuleControllerUrl(): string {
//     return 'SmsMainApiPathPrivateSiteConfig';
//   }
//   ServiceGetOneWithJsonFormatter(id: string): Observable<ErrorExceptionResult<SmsMainApiPathPrivateSiteConfigAliasJsonModel>> {
//     return this.http
//       .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneWithJsonFormatter/' + id, {
//         headers: this.getHeaders(),
//       })
//       .pipe(
//         retry(this.configApiRetry),
//         // catchError(this.handleError)
//         map((ret: any) => {
//           return this.errorExceptionResultCheck(ret);
//         }),
//       );
//   }
//   ServiceTestSend(model: SmsApiSendTestDtoModel):  Observable<ErrorExceptionResult<SmsApiSendResultModel>> {
//    if (model == null) {
//      model = new SmsApiSendTestDtoModel();
//    }

//    return this.http
//      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/TestSend', model, {
//        headers: this.getHeaders(),
//      })
//      .pipe(
//        retry(this.configApiRetry),
//        // catchError(this.handleError)
//        map((ret: any) => {
//          return this.errorExceptionResultCheck(ret);
//        }),
//      );
//  }
// }
