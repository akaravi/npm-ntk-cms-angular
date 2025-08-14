import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsFileUploaderModule } from 'projects/ntk-cms-fileuploader/src/public-api';

@Component({
  selector: 'app-fileuploader-test',
  templateUrl: './fileuploaderTest.component.html',
  styleUrls: ['./fileuploaderTest.component.scss'],
  standalone: true,
  imports: [CommonModule, CmsFileUploaderModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileUploaderTestComponent {
  title = 'fileuploader-test works!';

  uploadSuccess(event: any): void {
    console.log('Upload success:', event);
  }
}



