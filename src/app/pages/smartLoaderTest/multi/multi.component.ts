import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtkSmartLoaderService, NtkSmartLoaderModule } from 'ngx-ntk-smart-module';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss'],
  standalone: true,
  imports: [CommonModule, NtkSmartLoaderModule],
  providers: [NtkSmartLoaderService]
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




