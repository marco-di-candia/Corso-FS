import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  posts: PostInterface[] = [];

  constructor(private postSrv: PostService) { }

  async ngOnInit(): Promise<void> {
    const post = await this.postSrv.getPost();
    this.posts = post;
  }
  get postAttivi(): PostInterface[] {
    return this.posts.filter((post) => post.active);
  }
}
