import { Component} from '@angular/core';
import { ContentService } from '../content.service';
import { IPost } from '../shared/interfaces/post';

@Component({
  selector: 'app-player-post',
  templateUrl: './player-post.component.html',
  styleUrls: ['./player-post.component.scss']
})
export class PlayerPostComponent{

  posts: IPost[] | undefined;

  constructor(private contentService: ContentService) { this.loadPostsForPlayers();}

  loadPostsForPlayers(){
    this.contentService.loadPlayerPosts().subscribe(posts => this.posts = posts);
  }

}
