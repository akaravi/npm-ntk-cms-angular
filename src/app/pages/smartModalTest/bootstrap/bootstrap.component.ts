import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtkSmartModalComponent, NtkSmartModalModule } from 'ngx-ntk-smart-module';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  standalone: true,
  imports: [CommonModule, NtkSmartModalModule ],
  encapsulation: ViewEncapsulation.Emulated
})
export class BootstrapComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // Component initialization logic can be added here
  }

}



