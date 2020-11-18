import { ApplicationScoreDtoModel } from '../../models/dto/application/applicationScoreDtoModel';
import { ApplicationAppModel } from '../../models/entity/application/applicationAppModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class ApplicationAppService extends ApiCmsServerBase<ApplicationAppModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApplicationApp';
  }

  ServiceScoreClick(model: ApplicationScoreDtoModel): Observable<ErrorExcptionResultBase> {
    if (model == null) {
      model = new ApplicationScoreDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ScoreClick', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
}
