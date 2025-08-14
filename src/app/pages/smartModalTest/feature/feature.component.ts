import { AfterViewInit, ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtkSmartModalService, NtkSmartModalComponent, NtkSmartModalModule } from 'ngx-ntk-smart-module';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  standalone: true,
  imports: [CommonModule, NtkSmartModalModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureComponent implements AfterViewInit {
  version = VERSION.full;

  // tslint:disable:max-line-length
  sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper neque ac ullamcorper scelerisque. Proin molestie erat sapien, ac dapibus tortor placerat a. Vivamus quis tempor mauris. Ut porta ultricies nisi in eleifend';

  constructor(public ntkSmartModalService: NtkSmartModalService) {
  }

  ngAfterViewInit(): void {
    this.ntkSmartModalService.getModal('classicModal').onEscape.subscribe((event: Event) => {
      console.log('You just escaped the classicModal!', event);
    });
  }

}



