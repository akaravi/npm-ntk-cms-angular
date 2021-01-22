import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
} from '@angular/core';
import { AnyARecord } from 'dns';
import { ErrorExceptionResult, FileUploadedModel } from 'ntk-cms-api';
import { Subscription } from 'rxjs';
import { ComponentUploaderOptionModel } from './models/ComponentUploaderOptionModel';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cms-file-uploader',
  templateUrl: './cms-fileuploader.component.html',
  styleUrls: ['./cms-fileuploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmsFileUploaderComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}
  @Input()
  set options(model: ComponentUploaderOptionModel) {
    this.dateOption = model;
  }
  get options(): ComponentUploaderOptionModel {
    return this.dateOption;
  }
  private dateOption: ComponentUploaderOptionModel = new ComponentUploaderOptionModel();

  @ViewChild('flow', { static: false })
  autoUploadSubscription: Subscription;
  flowOption: flowjs.FlowOptions;
  uploadViewImage = false;
  ngOnInit(): void {
    this.flowOption = {
      target: this.dateOption.data.PathApiUpload,
      // tslint:disable-next-line: typedef

      allowDuplicateUploads: false,
    };
  }

  ngAfterViewInit(): void {

  }
  fileSuccess(event: any): void {
    if (event && event.event) {
      if (this.dateOption && this.dateOption.onActions && this.dateOption.onActions.onActionSelect) {
        const model = {
          fileName: event.event[0].name,
          fileKey: event.event[1],
        };
        const retUpload = JSON.parse(event.event[1]) as ErrorExceptionResult<FileUploadedModel>;
        retUpload.Item.FileName = event.event[0].name;
        this.dateOption.onActions.onActionSelect(retUpload);
        this.dateOption.data.Select = retUpload;
      }
    }
  }
  trackTransfer(transfer: any): string {
    return transfer.id;
  }

  ngOnDestroy(): void {
    this.autoUploadSubscription.unsubscribe();
  }
}
