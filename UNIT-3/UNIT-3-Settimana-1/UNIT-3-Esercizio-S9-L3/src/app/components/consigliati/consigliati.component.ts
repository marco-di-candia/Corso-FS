import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-consigliati',
  templateUrl: './consigliati.component.html',
  styleUrls: ['./consigliati.component.css']
})
export class ConsigliatiComponent {
  posts: Post[] = [];
  selectedPost: Post | undefined;

  constructor() {
    this.getPosts().then((posts) => {
      this.posts = posts;
      this.selectRandomPost();
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data
  }
  selectRandomPost() {
    if (this.posts.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.posts.length);
      this.selectedPost = this.posts[randomIndex];
    }
  }
}
