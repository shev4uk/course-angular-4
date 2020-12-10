import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError((er) => throwError(er))
      );
  }

  addPost(data: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', data);
  }

  deletePost(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
