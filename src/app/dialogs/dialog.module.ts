import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DeleteDialogComponent,
    SelectProductImageDialogComponent

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FileUploadModule,
    MatCardModule
  ]
})
export class DialogModule { }
