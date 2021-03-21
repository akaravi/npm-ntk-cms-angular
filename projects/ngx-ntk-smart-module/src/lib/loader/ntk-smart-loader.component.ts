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
import { NtkSmartLoaderService } from './ntk-smart-loader.service';

@Component({
  selector: 'ntk-smart-loader',
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

  private privateDebouncer: any;
  private privateIsProcessing = false;

  private privateLoaderBodyClass = 'loader-open';
  private privateEnterClass = 'enter';
  private privateLeaveClass = 'leave';

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
    this.privateIsProcessing = true;

    clearInterval(this.privateDebouncer);

    this.visible = true;

    setTimeout(() => {
      this.addCustomClass(this.privateEnterClass);
    });

    this.privateDebouncer = setTimeout(() => {
      if (top) {
        this.layerPosition = this.ntkSmartLoaderService.getHigherIndex();
      }

      if (!document.body.classList.contains(this.privateLoaderBodyClass)) {
        document.body.classList.add(this.privateLoaderBodyClass);
      }

      this.loading = true;

      this.onStart.emit(this);
      this.onVisibleChange.emit(this);

      this.removeCustomClass(this.privateEnterClass);
      this.privateIsProcessing = false;
    }, this.delayIn);
  }

  public stop(): void {
    if (this.privateIsProcessing) {
      this.visible = false;
      this.loading = false;
    }

    clearInterval(this.privateDebouncer);

    this.addCustomClass(this.privateLeaveClass);
    this.loading = false;
    this.privateDebouncer = setTimeout(() => {
      if (document.body.classList.contains(this.privateLoaderBodyClass)) {
        document.body.classList.remove(this.privateLoaderBodyClass);
      }

      this.visible = false;

      this.onStop.emit(this);
      this.onVisibleChange.emit(this);

      this.removeCustomClass(this.privateLeaveClass);
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
