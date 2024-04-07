import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component'; // Importa il guardiano AuthGuard
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ValidUrlDirective } from './directive/valid-url.directive';


const routes: Route[] = [
  {
    path: '', // Rotta per la home page
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users', // Rotta per la home page
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'SingIn',
    component: RegisterComponent,

  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ValidUrlDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes), // Configura il modulo di routing con le rotte definite

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
