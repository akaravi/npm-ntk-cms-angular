// import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CmsFileManagerComponent} from './cms-filemanager.component';
import {FolderContentComponent} from './components/folder-content/folder-content.component';
import {TreeComponent} from './components/tree/tree.component';
import {NodeListerComponent} from './components/tree/node-lister/node-lister.component';
import {NodeComponent} from './components/functions/node/node.component';
import {MapToIterablePipe} from './pipes/map-to-iterable.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoadingOverlayComponent} from './components/functions/loading-overlay/loading-overlay.component';
import {FileSizePipe} from './pipes/file-size.pipe';
import {UploadComponent} from './components/functions/upload/upload.component';
import {NewFolderComponent} from './components/functions/upload/new-folder/new-folder.component';
import {SideViewComponent} from './components/side-view/side-view.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NtkSmartModalModule} from 'ngx-ntk-smart-module';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FilePickerModule } from 'ngx-awesome-uploader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NtkSmartModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    FilePickerModule
  ],
  declarations: [
    CmsFileManagerComponent,
    FolderContentComponent,
    NodeComponent,
    TreeComponent,
    NodeListerComponent,
    MapToIterablePipe,
    NavBarComponent,
    LoadingOverlayComponent,
    FileSizePipe,
    UploadComponent,
    NewFolderComponent,
    SideViewComponent,
    NavigationComponent
  ],
  exports: [
    CmsFileManagerComponent,
    LoadingOverlayComponent,
    SideViewComponent
  ],
  providers: [TranslateService]

})
export class CmsFileManagerModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FileManagerModule,
  //     providers: [TranslateService]
  //   };
  // }
}
