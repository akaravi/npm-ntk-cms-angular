import { Component, OnInit } from '@angular/core';
import { NtkSmartLoaderService } from 'projects/ngx-ntk-smart-module/src/public-api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
