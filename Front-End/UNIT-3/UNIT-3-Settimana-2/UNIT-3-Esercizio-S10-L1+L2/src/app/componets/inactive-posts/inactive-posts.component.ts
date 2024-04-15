import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts: PostInterface[] = [];

  constructor(private postSrv: PostService) { }

  async ngOnInit(): Promise<void> {
    const post = await this.postSrv.getPost();
    this.posts = post;
  }

  get postDisativi(): PostInterface[] {
    return this.posts.filter((post) => !post.active);
  }
}
