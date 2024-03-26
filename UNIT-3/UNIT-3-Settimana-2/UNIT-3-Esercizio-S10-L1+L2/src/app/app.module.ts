import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { ActivePostsComponent } from './componets/active-posts/active-posts.component';
import { InactivePostsComponent } from './componets/inactive-posts/inactive-posts.component';
import { Route, RouterModule } from '@angular/router';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { PostDetailComponent } from './componets/post-detail/post-detail.component';
import { SinglePostComponent } from './componets/single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from './directives/random-color.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    HomepageComponent,
    PostDetailComponent,
    SinglePostComponent,
    RandomColorDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
