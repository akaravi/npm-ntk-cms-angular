import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-filemanager-newfolder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {
  @Input() openDialog = false;
  @ViewChild('uploadFolder') uploadFolder: ElementRef;
  @Output() buttonClicked = new EventEmitter();
  @Output() closeDialog = new EventEmitter();
  @Output() createDir = new EventEmitter();

  buttonText: string;
  inputValue = '';

  constructor(private translateService: TranslateService) {
    this.buttonText = this.translateService.instant('filemanager.close');
  }

  ngOnInit() {
  }

  onClick() {
    const el: HTMLElement = (this.uploadFolder.nativeElement as HTMLElement);
    // @ts-ignore
    // this.buttonClicked.emit(el.value);
    const name = el.value;
    if (name && name.length > 0) {
      this.createDir.emit(name);
      this.newClickedAction();
    }
    else {
      this.newClickedAction();
    }
  }

  onInputChange(event: any) {
    this.inputValue = event.target.value;
    if (this.inputValue.length > 0) {
      this.buttonText = this.translateService.instant('filemanager.confirm').toString();
    } else {
      this.buttonText = this.translateService.instant('filemanager.close').toString();
    }
  }

  newClickedAction() {
    this.closeDialog.emit();
  }
}
