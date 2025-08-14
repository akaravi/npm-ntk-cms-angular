import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NtkSmartLoaderService, NtkSmartLoaderModule } from 'ngx-ntk-smart-module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NtkSmartLoaderModule],
  providers: [NtkSmartLoaderService]
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

  getAllLoaderIds(): string {
    return this.loader.getLoaderStack().map(l => l.id).join(', ');
  }
}




