import { Component, OnInit } from '@angular/core';
import { NtkSmartLoaderService } from 'projects/ngx-ntk-smart-module/src/public-api';

@Component({
  selector: 'app-smartLoaderTest',
  templateUrl: './smartLoaderTest.component.html',
  styleUrls: ['./smartLoaderTest.component.scss']
})
export class SmartLoaderTestComponent implements OnInit {

  public demoOptions = {
    actionDelay: 0,
    hideDelay: 200,
    noHideDelay: false
  };

  constructor(public loader: NtkSmartLoaderService) {
  }

  ngOnInit(): void {
    this.loader.start('myLoader');
  }

}
