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

// Definizione delle rotte del modulo
const routes: Routes = [
  {
    path: '', // Percorso vuoto
    component: ReattiviFromComponent, // Componente da caricare quando il percorso è vuoto
  },
]

@NgModule({
  declarations: [
    ReattiviFromComponent // Dichiarazione del componente reattivi-form
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
    RouterModule.forChild(routes) // Configurazione delle rotte per il modulo figlio
  ],
  exports: [
    ReattiviFromComponent, // Esportazione del componente reattivi-form
    RouterModule // Esportazione del modulo di routing per il modulo figlio
  ]
})
export class ReattiviModuleModule { } // Definizione del modulo dei form reattivi
