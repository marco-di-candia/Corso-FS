import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './components/users/users.component';
import { FavoriteComponetComponent } from './components/favorite-componet/favorite-componet.component'; // Importa il guardiano AuthGuard


const routes: Route[] = [
  {
      path: '', // Rotta per la home page
      component: HomeComponent,
  },
  {
    path: 'users', // Rotta per la home page
    component: UsersComponent,
},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    FavoriteComponetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Configura il modulo di routing con le rotte definite

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
