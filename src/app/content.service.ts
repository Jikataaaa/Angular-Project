import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './shared/interfaces/post';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadAllPosts() {
    return this.http.get<IPost[]>('http://localhost:3000/posts');
  }
}
