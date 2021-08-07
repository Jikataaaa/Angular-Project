import { Component} from '@angular/core';
import { ContentService } from '../content.service';
import { IPost } from '../shared/interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private ContentService: ContentService) { this.loadRecentPosts() }

   recentPosts: IPost[] | undefined;

  loadRecentPosts(){
    this.ContentService.loadAllPosts().subscribe(posts => this.recentPosts = posts);
  }



}
