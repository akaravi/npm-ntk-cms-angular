import { Component, OnInit } from '@angular/core';
import { NtkSmartLoaderService } from 'projects/ngx-ntk-smart-module/src/public-api';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  public code: any = {
    one: null,
    two: null,
    three: null
  };

  constructor(public loader: NtkSmartLoaderService) {

    this.code.one = `
<ntk-smart-loader identifier="myCustomLoader1" [delayIn]="2000" [delayOut]="2000">
  <div class="rubik-loader"></div>
</ntk-smart-loader>`;

    this.code.two = `
<ntk-smart-loader identifier="myCustomLoader2" [delayOut]="200">
  <div id="jelly-loader">
    <div id="shadow"></div>
    <div id="box"></div>
  </div>
</ntk-smart-loader>`;

    this.code.three = `
<ntk-smart-loader identifier="myCustomLoader3" [delayOut]="200">
  ...
</ntk-smart-loader>`;

  }

  ngOnInit(): void {
    // Component initialization logic can be added here
  }

  onStart(event: any): void {
    console.log('loader started', event);
  }

  onStop(event: any): void {
    console.log('loader stopped', event);
  }
}
