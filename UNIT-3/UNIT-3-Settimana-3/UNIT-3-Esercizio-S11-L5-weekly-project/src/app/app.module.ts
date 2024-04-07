// Importa i moduli necessari da Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router'; // Importa il modulo di routing
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Importa i componenti dell'applicazione
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard'; // Importa il guardiano AuthGuard
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ValidUrlDirective } from './directive/valid-url.directive'; // Importa la direttiva ValidUrlDirective

// Definisce le rotte dell'applicazione
const routes: Route[] = [
  {
    path: '', // Rotta per la home page
    component: HomeComponent,
    canActivate: [AuthGuard] // Utilizza l'AuthGuard per proteggere questa rotta
  },
  {
    path: 'users', // Rotta per la pagina degli utenti
    component: UsersComponent,
    canActivate: [AuthGuard] // Utilizza l'AuthGuard per proteggere questa rotta
  },
  {
    path: 'login', // Rotta per la pagina di login
    component: LoginComponent,
  },
  {
    path: 'register', // Rotta per la pagina di registrazione
    component: RegisterComponent,
  },
]

@NgModule({
  declarations: [ // Dichiarazione dei componenti e delle direttive utilizzate nell'app
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ValidUrlDirective // Aggiungi la direttiva ValidUrlDirective
  ],
  imports: [ // Importa i moduli necessari per l'app
    BrowserModule,
    HttpClientModule, // Modulo per effettuare richieste HTTP
    FormsModule, // Modulo per gestire i form
    RouterModule.forRoot(routes), // Configura il modulo di routing con le rotte definite

  ],
  providers: [], // Fornitori di servizi
  bootstrap: [AppComponent] // Componente di avvio dell'applicazione
})
export class AppModule { }
