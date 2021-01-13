import { Component } from '@angular/core';
import { NtkSmartLoaderService } from 'projects/ngx-ntk-smart-module/src/public-api';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent {

  public code: any = {
    one: null,
    two: null,
    three: null
  };

  constructor(public loader: NtkSmartLoaderService) {

    this.code.one = `
<ntk-smart-loader identifier="myLoaderMulti" [delayIn]="2000" [delayOut]="200">
  <div class="loader">
    <div class="circle"></div>
  </div>
</ntk-smart-loader>`;

    this.code.two = `
<ntk-smart-loader identifier="myLoaderMulti" [delayOut]="200">
  <div class="loader">
    <div class="circle"></div>
  </div>
</ntk-smart-loader>`;

    this.code.three = `
<ntk-smart-loader identifier="myLoaderMulti" [delayOut]="200">
  <div class="loader">
    <div class="circle"></div>
  </div>
</ntk-smart-loader>`;


  }

}
