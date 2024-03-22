import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Brand1Component } from './components/brand-1/brand-1.component';
import { Brand2Component } from './components/brand-2/brand-2.component';
import { Brand3Component } from './components/brand-3/brand-3.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Lamborghini',
    component: Brand1Component
  },
  {
    path: 'AstonMartin',
    component:  Brand2Component,
  },
  {
    path: 'Ferrari',
    component:  Brand3Component,
  },
];

@NgModule({
  declarations: [

    AppComponent,
    Brand1Component,
        Brand2Component,
        Brand3Component,
        HomeComponent,
        NavbarComponent,
        MainComponent,
        FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
