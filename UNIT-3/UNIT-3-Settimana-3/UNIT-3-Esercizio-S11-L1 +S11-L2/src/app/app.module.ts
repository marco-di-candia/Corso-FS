import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DrivenFormComponent } from './componets/driven-form/driven-form.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'driven',
    component: DrivenFormComponent,
  },
  {
    path: 'reattivi',
    loadChildren: () =>
      import('./componets/reattivi-from/reattivi-module.module').then(
        (m) => m.ReattiviModuleModule
      ),
  },
]

@NgModule({
  declarations: [
    AppComponent,
    DrivenFormComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatIconModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
