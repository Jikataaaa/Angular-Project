import { Component} from '@angular/core';
import { ContentService } from '../content.service';
import { IPost } from '../shared/interfaces/post';

@Component({
  selector: 'app-team-post',
  templateUrl: './team-post.component.html',
  styleUrls: ['./team-post.component.scss']
})
export class TeamPostComponent{
  
  posts: IPost[] | undefined;

  constructor(private contentService: ContentService) { this.loadPostsForTeams();}

  loadPostsForTeams(){
    this.contentService.loadTeamPosts().subscribe(posts => this.posts = posts);
  }

}
