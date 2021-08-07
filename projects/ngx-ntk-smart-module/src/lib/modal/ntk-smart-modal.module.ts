import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NtkSmartModalStackService } from './ntk-smart-modal-stack.service';
import { NtkSmartModalComponent } from './ntk-smart-modal.component';
import { NtkSmartModalService } from './ntk-smart-modal.service';

@NgModule({
  declarations: [NtkSmartModalComponent],
  exports: [NtkSmartModalComponent],
  imports: [CommonModule],
})
export class NtkSmartModalModule {
  /**
   * Use in AppModule: new instance of NtkSmartModal.
   */
  public static forRoot(): ModuleWithProviders<NtkSmartModalModule> {
    return {
      ngModule: NtkSmartModalModule,
      providers: [
        NtkSmartModalService,
        NtkSmartModalStackService
      ],
    };
  }

  /**
   * Use in features modules with lazy loading: new instance of NtkSmartModal.
   */
  public static forChild(): ModuleWithProviders<NtkSmartModalModule> {
    return {
      ngModule: NtkSmartModalModule,
      providers: [
        NtkSmartModalService,
        NtkSmartModalStackService
      ],
    };
  }
}
