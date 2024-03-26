import { Component, ViewChild, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  post!: PostInterface;
  related: PostInterface[] = [];
  posts: PostInterface[] = [];
  filter!: string
  tags!: string[];

  @ViewChild("singlePost") singlePost!: SinglePostComponent;

  constructor(private postSrv: PostService) { }

  async ngOnInit(): Promise<void> {
    this.posts = await this.postSrv.getPost();
    this.updateTopPostAndRelated();
    this.tags = this.postSrv.getTags();

  }

  updateTopPostAndRelated(): void {
    this.post = this.getTopPost();
    this.related = this.getRandomPosts(4);
  }

  getTopPost(): PostInterface {
    return this.posts.sort((a, b) => b.reactions - a.reactions)[0];
  }

  getRandomPosts(num: number): PostInterface[] {
    const randomPosts: PostInterface[] = [];
    const numHistory: number[] = [];
    const postsLength = this.posts.length;
    if (num >= postsLength) return this.posts;

    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * postsLength);
      if (numHistory.includes(random)) continue;
      numHistory.push(random);
      randomPosts.push(this.posts[random]);
    }
    return randomPosts;
  }

  editPost() {
    alert("Modifica avvenuta con successo!");
  }
  async filterPosts(tag: string) {
    this.filter = tag;
    this.posts = await this.postSrv.getFilteredPosts(this.filter);
  }

}
