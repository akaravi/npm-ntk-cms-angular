import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NtkSmartLoaderComponent } from './ntk-smart-loader.component';
import { NtkSmartLoaderService } from './ntk-smart-loader.service';

@NgModule({
  declarations: [NtkSmartLoaderComponent],
  exports: [NtkSmartLoaderComponent],
  imports: [CommonModule],
})
export class NtkSmartLoaderModule {
  /**
   * Use in AppModule: new instance of NtkSmartLoader.
   */
  public static forRoot(): ModuleWithProviders<NtkSmartLoaderModule> {
    return {
      ngModule: NtkSmartLoaderModule,
      providers: [NtkSmartLoaderService],
    };
  }

  /**
   * Use in features modules with lazy loading: new instance of NtkSmartLoader.
   */
  public static forChild(): ModuleWithProviders<NtkSmartLoaderModule> {
    return {
      ngModule: NtkSmartLoaderModule,
      providers: [NtkSmartLoaderService],
    };
  }
}
