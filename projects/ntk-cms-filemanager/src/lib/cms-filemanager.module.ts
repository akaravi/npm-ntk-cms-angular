import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FilePickerModule } from 'ngx-ntk-file-picker';
import { NtkSmartModalModule } from 'ngx-ntk-smart-module';
import { FileCategoryService, FileContentService } from 'ntk-cms-api';
import { CmsFileManagerComponent } from './cms-filemanager.component';
import { FolderContentComponent } from './components/folder-content/folder-content.component';
import { LoadingOverlayComponent } from './components/functions/loading-overlay/loading-overlay.component';
import { NewFolderComponent } from './components/functions/new-folder/new-folder.component';
import { NodeComponent } from './components/functions/node/node.component';
import { UploadComponent } from './components/functions/upload/upload.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SideViewComponent } from './components/side-view/side-view.component';
import { NodeListerComponent } from './components/tree/node-lister/node-lister.component';
import { TreeComponent } from './components/tree/tree.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { TranslateUiService } from './services/translateUi.service';
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule,
    NtkSmartModalModule.forRoot(),
    FilePickerModule
  ],
  declarations: [
    CmsFileManagerComponent,
    FolderContentComponent,
    NodeComponent,
    TreeComponent,
    NodeListerComponent,
    NavBarComponent,
    NavigationComponent,
    LoadingOverlayComponent,
    UploadComponent,
    NewFolderComponent,
    SideViewComponent,
    MapToIterablePipe,
    FileSizePipe,
  ],
  exports: [
    CmsFileManagerComponent,
    FolderContentComponent,
    NodeComponent,
    TreeComponent,
    NodeListerComponent,
    NavBarComponent,
    NavigationComponent,
    LoadingOverlayComponent,
    UploadComponent,
    NewFolderComponent,
    SideViewComponent,
  ],
  providers: [
    FileContentService,
    FileCategoryService,
    TranslateUiService
  ]

})
export class CmsFileManagerModule {
  static forRoot(): ModuleWithProviders<CmsFileManagerModule> {
    return {
      ngModule: CmsFileManagerModule,
      providers: [TranslateService]
    };
  }
}
