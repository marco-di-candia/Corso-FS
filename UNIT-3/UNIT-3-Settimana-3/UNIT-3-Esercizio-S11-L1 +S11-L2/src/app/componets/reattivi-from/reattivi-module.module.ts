import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReattiviFromComponent } from './reattivi-from.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: '',
    component: ReattiviFromComponent,
  },
]
@NgModule({
  declarations: [
    ReattiviFromComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ReattiviFromComponent,
    RouterModule
  ]
})
export class ReattiviModuleModule { }
