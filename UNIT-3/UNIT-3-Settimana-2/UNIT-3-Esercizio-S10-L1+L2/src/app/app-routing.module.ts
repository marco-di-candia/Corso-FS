import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './componets/active-posts/active-posts.component';
import { InactivePostsComponent } from './componets/inactive-posts/inactive-posts.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { PostDetailComponent } from './componets/post-detail/post-detail.component';

const routes: Route[] = [
  {
    path: 'active',
    component: ActivePostsComponent,
  },
  {
    path: 'inactive',
    component: InactivePostsComponent,
  },
  {
    path: "post/:id",
    component: PostDetailComponent
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
