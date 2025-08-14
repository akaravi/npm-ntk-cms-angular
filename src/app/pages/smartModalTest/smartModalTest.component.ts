import { Component, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NtkSmartModalService, NtkSmartModalModule } from 'ngx-ntk-smart-module';

@Component({
  selector: 'app-smart-modal-test',
  templateUrl: './smartModalTest.component.html',
  styleUrls: ['./smartModalTest.component.scss'],
  standalone: true,
  imports: [CommonModule, NtkSmartModalModule]
})
export class SmartModalTestComponent {
  title = 'smart-modal-test works!';
  version = VERSION.full;
  
  sampleText = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper neque ac ullamcorper scelerisque.',
    'Proin molestie erat sapien, ac dapibus tortor placerat a. Vivamus quis tempor mauris.',
    'Ut porta ultricies nisi in eleifend. Sed euismod, nisl eget ultricies aliquam.',
    'Nullam euismod, nisl eget ultricies aliquam, nisl nisl aliquam nisl.'
  ];

  constructor(public ntkSmartModalService: NtkSmartModalService, private router: Router) {}

  log(message: string): void {
    console.log(message);
  }

  goFeature(): void {
    this.router.navigate(['/smartModalTest/feature']);
  }

  goBootstrap(): void {
    this.router.navigate(['/smartModalTest/bootstrap']);
  }

  goAutoStart(): void {
    this.router.navigate(['/smartModalTest/autostart']);
  }
}



