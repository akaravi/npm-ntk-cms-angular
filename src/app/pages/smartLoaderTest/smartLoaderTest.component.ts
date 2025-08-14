import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NtkSmartLoaderService, NtkSmartLoaderModule } from 'ngx-ntk-smart-module';

@Component({
  selector: 'app-smartloader-test',
  templateUrl: './smartLoaderTest.component.html',
  styleUrls: ['./smartLoaderTest.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, NtkSmartLoaderModule],
  providers: [NtkSmartLoaderService]
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




