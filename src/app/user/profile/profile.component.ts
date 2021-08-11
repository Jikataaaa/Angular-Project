import { Component} from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{

  posts: IPost[] | undefined;

  get user() {
    return this.userService.getProfileData();
  }

  constructor(private userService: UserService) {this.loadPosts();}

  loadPosts(){
    this.userService.getPostsByName(this.user.username).subscribe(posts => this.posts = posts);
  }
  


}
