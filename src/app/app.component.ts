import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts = posts;
    },
    (er) => {
      console.log(er);
    })
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe((post) => {
      const indexPost = this.posts.findIndex((item) => item.id == id);
      this.posts.splice(indexPost, 1);
    })
  }
  
}
