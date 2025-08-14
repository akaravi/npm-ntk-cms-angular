import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtkSmartLoaderModule, NtkSmartLoaderService } from 'ngx-ntk-smart-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-autostart',
  templateUrl: './autostart.component.html',
  styleUrls: ['./autostart.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NtkSmartLoaderModule],
  providers: [NtkSmartLoaderService]
})
export class AutostartComponent implements OnInit {

  constructor(public loader: NtkSmartLoaderService) { }

  ngOnInit(): void {
    // Component initialization logic can be added here
  }

}




