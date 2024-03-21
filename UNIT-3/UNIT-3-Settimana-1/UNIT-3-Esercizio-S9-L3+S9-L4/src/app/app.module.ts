import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InevidenzaComponent } from './components/inevidenza/inevidenza.component';
import { CorrelatiComponent } from './components/correlati/correlati.component';
import { ConsigliatiComponent } from './components/consigliati/consigliati.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'activePosts',
    component: ActivePostsComponent,
  },
  {
    path: 'inactivePosts',
    component: InactivePostsComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    HomeComponent,
    NavbarComponent,
    InevidenzaComponent,
    CorrelatiComponent,
    ConsigliatiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
