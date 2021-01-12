import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { NtkSmartLoaderService } from './ngx-smart-loader.service';
import { NtkSmartLoaderComponent } from './ngx-smart-loader.component';

@NgModule({
  declarations: [NtkSmartLoaderComponent],
  exports: [NtkSmartLoaderComponent],
  imports: [CommonModule]
})
export class NtkSmartLoaderModule {

  /**
   * Use in AppModule: new instance of NtkSmartLoader.
   */
  public static forRoot(): ModuleWithProviders<NtkSmartLoaderModule> {
    return {
      ngModule: NtkSmartLoaderModule,
      providers: [NtkSmartLoaderService]
    };
  }

  /**
   * Use in features modules with lazy loading: new instance of NtkSmartLoader.
   */
  public static forChild(): ModuleWithProviders<NtkSmartLoaderModule> {
    return {
      ngModule: NtkSmartLoaderModule,
      providers: [NtkSmartLoaderService]
    };
  }

}
