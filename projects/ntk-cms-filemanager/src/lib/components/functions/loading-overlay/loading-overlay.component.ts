import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';

@Component({
  selector: 'lib-filemanager-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
  standalone: false,
})
export class LoadingOverlayComponent implements OnInit {
  @Input() loadingOverlayTemplate: TemplateRef<any>;
  timeoutMessage: any;

  constructor(private translateService: TranslateService) {}

  // todo unsubscribe from 'list' event - now we are only dismissing this component
  ngOnInit() {
    timer(20000).subscribe(() => {
      this.timeoutMessage = this.translateService.instant(
        'filemanager.loading_troubles'
      );
    });
  }
}
