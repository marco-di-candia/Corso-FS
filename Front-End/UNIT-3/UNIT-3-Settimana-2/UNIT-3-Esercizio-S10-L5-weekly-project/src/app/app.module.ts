import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttiviComponent } from './componets/attivi/attivi.component';
import { NonAttiviComponent } from './componets/non-attivi/non-attivi.component';
import { HomeComponent } from './componets/home/home.component';
import { UsersComponent } from './componets/users/users.component';
import { AllDoToComponent } from './componets/all-do-to/all-do-to.component';
import { Route, RouterModule } from '@angular/router';
import { NavbarComponent } from './componets/navbar/navbar.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'allDoTo',
    component: AllDoToComponent,
  },
  {
    path: 'attivi',
    component: AttiviComponent,
  },
  {
    path: 'nonAttivi',
    component: NonAttiviComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NonAttiviComponent,
    HomeComponent,
    UsersComponent,
    AttiviComponent,
    AllDoToComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
