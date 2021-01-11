import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NtkSmartModalService } from '../services/ntk-smart-modal.service';
import { NtkSmartModalComponent } from '../components/ntk-smart-modal.component';

@NgModule({
  declarations: [NtkSmartModalComponent],
  exports: [NtkSmartModalComponent],
  imports: [CommonModule]
})
export class NtkSmartModalModule {

  /**
   * Use in AppModule: new instance of NtkSmartModal.
   */
  public static forRoot(): ModuleWithProviders<NtkSmartModalModule> {
    return {
      ngModule: NtkSmartModalModule,
      providers: [NtkSmartModalService]
    };
  }

  /**
   * Use in features modules with lazy loading: new instance of NtkSmartModal.
   */
  public static forChild(): ModuleWithProviders<NtkSmartModalModule> {
    return {
      ngModule: NtkSmartModalModule,
      providers: [NtkSmartModalService]
    };
  }

}
