import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
// Import dei componenti dell'applicazione
import { AppComponent } from './app.component';
import { DrivenFormComponent } from './componets/driven-form/driven-form.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
// Import dei moduli per i form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import dei moduli di Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

// Definizione delle rotte dell'applicazione
const routes: Route[] = [
  {
    path: '',// Percorso principale (home)
    component: HomeComponent,// Componente visualizzato quando il percorso è vuoto
  },
  {
    path: 'driven',// Percorso per il form guidato
    component: DrivenFormComponent,// Componente visualizzato quando il percorso è '/driven'
  },
  {
    path: 'reattivi',// Percorso per il form reattivo
    loadChildren: () =>
      import('./componets/reattivi-from/reattivi-module.module').then(
        (m) => m.ReattiviModuleModule // Caricamento del modulo dei form reattivi in modo lazy
      ),
  },
]

@NgModule({
  declarations: [
    // Dichiarazione dei componenti utilizzati nell'app
    AppComponent,
    DrivenFormComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    // Import dei moduli necessari all'interno dell'app
    BrowserModule,
    FormsModule,// Modulo per i form template-driven
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,// Modulo per i form reattivi
    RouterModule.forRoot(routes),// Configurazione delle rotte dell'app
    BrowserAnimationsModule,// Modulo per le animazioni
    NoopAnimationsModule,
    MatIconModule,// Modulo per gli icon material


  ],
  providers: [],
  bootstrap: [AppComponent]// Componente principale dell'app
})
export class AppModule { }// Definizione del modulo principale dell'app
