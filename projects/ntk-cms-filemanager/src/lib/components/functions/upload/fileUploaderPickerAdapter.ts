import { HttpRequest, HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of } from 'rxjs';
import { FilePickerAdapter, UploadResponse, UploadStatus, FilePreviewModel } from 'ngx-awesome-uploader';

export class FileUploaderPickerAdapter extends FilePickerAdapter {
  constructor(private http: HttpClient) {
    super();
  }
  baseUploadURL = 'https://apifile.ir/api/v2/';
  routeUpload = 'upload';
  public uploadFile(fileItem: FilePreviewModel): Observable<UploadResponse> {
    const form = new FormData();
    form.append('file', fileItem.file);
    const req = new HttpRequest('POST', this.baseUploadURL + this.routeUpload, form, { reportProgress: true });
    return this.http.request(req).pipe(
      map((res) => {
        if (res.type === HttpEventType.Response) {
          const responseFromBackend = res.body;
          return {
            body: responseFromBackend,
            status: UploadStatus.UPLOADED
          };
        } else if (res.type === HttpEventType.UploadProgress) {
          /** Compute and show the % done: */
          const uploadProgress = +Math.round((100 * res.loaded) / res.total);
          return {
            status: UploadStatus.IN_PROGRESS,
            progress: uploadProgress
          };
        }
        return {
          status: UploadStatus.IN_PROGRESS,
        };
      }),
      catchError(er => {
        console.log(er);
        return of({ status: UploadStatus.ERROR, body: er });
      })
    );
  }
  public removeFile(fileItem: FilePreviewModel): Observable<any> {
    return new Observable<any>((observer) => {
      return () => {
        // Detach the event handler from the target
      };
    });
  }
}
