import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
// import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {
  @ViewChild('uploadFolder') uploadFolder: ElementRef;
  @Output() buttonClicked = new EventEmitter();

  // buttonText = _('filemanager.close').toString();
  buttonText = 'filemanager.close';
  inputValue = '';

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    const el: HTMLElement = (this.uploadFolder.nativeElement as HTMLElement);
    // @ts-ignore
    this.buttonClicked.emit(el.value);
  }

  onInputChange(event: any) {
    this.inputValue = event.target.value;
    if (this.inputValue.length > 0) {
      // this.buttonText = _('filemanager.confirm').toString();
      this.buttonText = 'filemanager.confirm';
    } else {
      // this.buttonText = _('filemanager.close').toString();
      this.buttonText = 'filemanager.close';
    }
  }
}
