import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { ShopComponent } from './componets/shop/shop.component';
import { FavoritesComponent } from './componets/favorites/favorites.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "fav",
    component: FavoritesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    FavoritesComponent,
    NavbarComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
