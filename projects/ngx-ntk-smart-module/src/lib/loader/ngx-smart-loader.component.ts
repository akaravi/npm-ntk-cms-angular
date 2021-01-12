import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';

import { LoaderInstance } from './loader-instance';
import { NtkSmartLoaderService } from './ngx-smart-loader.service';

@Component({
  selector: 'ngx-smart-loader',
  template: `
    <div class="loader-container {{customClass}}" [ngClass]="{'active': loading}"
         [style.z-index]="layerPosition - 1" *ngIf="visible">
      <ng-content></ng-content>
    </div>
  `
})
export class NtkSmartLoaderComponent implements OnInit, OnDestroy {

  @Input() public identifier = '';
  @Input() public customClass = '';
  @Input() public force = false;
  @Input() public delayIn = 0;
  @Input() public delayOut = 0;
  @Input() public autostart = false;

  @Output() public onStart = new EventEmitter<NtkSmartLoaderComponent>();
  @Output() public onStop = new EventEmitter<NtkSmartLoaderComponent>();
  @Output() public onVisibleChange = new EventEmitter<NtkSmartLoaderComponent>();

  public loading = false;
  public visible = false;
  public layerPosition = 999;

  private _debouncer: any;
  private _isProcessing = false;

  private _loaderBodyClass = 'loader-open';
  private _enterClass = 'enter';
  private _leaveClass = 'leave';

  constructor(public ntkSmartLoaderService: NtkSmartLoaderService, private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    try {
      const loader = new LoaderInstance(this);

      this.ntkSmartLoaderService.addLoader(loader, this.force);

      this.layerPosition += this.ntkSmartLoaderService.getLoaderStackCount();
      this.addCustomClass(this.identifier.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());

      if (this.autostart) {
        this.ntkSmartLoaderService.start(this.identifier);
      } else {
        this.ntkSmartLoaderService.executeAction(this.identifier, 'start');
      }
    } catch (error) {
      throw (error);
    }
  }

  public ngOnDestroy(): void {
    this.ntkSmartLoaderService.removeLoader(this.identifier);
  }

  public start(top?: boolean): void {
    this._isProcessing = true;

    clearInterval(this._debouncer);

    this.visible = true;

    setTimeout(() => {
      this.addCustomClass(this._enterClass);
    });

    this._debouncer = setTimeout(() => {
      if (top) {
        this.layerPosition = this.ntkSmartLoaderService.getHigherIndex();
      }

      if (!document.body.classList.contains(this._loaderBodyClass)) {
        document.body.classList.add(this._loaderBodyClass);
      }

      this.loading = true;

      this.onStart.emit(this);
      this.onVisibleChange.emit(this);

      this.removeCustomClass(this._enterClass);
      this._isProcessing = false;
    }, this.delayIn);
  }

  public stop(): void {
    if (this._isProcessing) {
      this.visible = false;
      this.loading = false;
    }

    clearInterval(this._debouncer);

    this.addCustomClass(this._leaveClass);
    this.loading = false;
    this._debouncer = setTimeout(() => {
      if (document.body.classList.contains(this._loaderBodyClass)) {
        document.body.classList.remove(this._loaderBodyClass);
      }

      this.visible = false;

      this.onStop.emit(this);
      this.onVisibleChange.emit(this);

      this.removeCustomClass(this._leaveClass);
      setTimeout(() => {
        this.changeDetectorRef.markForCheck();
      });
    }, this.delayOut);
  }

  public addCustomClass(className: string): void {
    if (!this.customClass.length) {
      this.customClass = className;
    } else {
      if (this.customClass.indexOf(className) === -1) {
        this.customClass += ' ' + className;
      }
    }
  }

  public removeCustomClass(className?: string): void {
    if (className) {
      this.customClass = this.customClass.replace(className, '').trim();
    } else {
      this.customClass = '';
    }
  }
}
