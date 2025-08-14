import { Component, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IconPickerModule } from 'ngx-ntk-icon-picker';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal.dialog.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconPickerModule],
  providers: [BsModalService]
})
export class ModalDialogComponent implements OnInit {
  modalRef: BsModalRef;
  myModalFormGroup: FormGroup;
  iconCss = new FormControl();
  fallbackIcon = 'fas fa-igloo';
  icon: string;

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.myModalFormGroup = new FormGroup({ iconCss: this.iconCss });
  }

  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }

}



