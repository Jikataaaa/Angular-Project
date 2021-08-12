import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './shared/interfaces/post';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadAllPosts() {
    return this.http.get<IPost[]>('http://localhost:3000/posts');
  }
  createPost(heading: string, description: string, type: string, author: string){
    return this.http.post<IPost>('http://localhost:3000/posts', {heading, description, type, author});
  }
  loadPlayerPosts(){
    return this.http.get<IPost[]>('http://localhost:3000/posts?type=player');
  }
  loadTeamPosts(){
    return this.http.get<IPost[]>('http://localhost:3000/posts?type=team');
  }
}
