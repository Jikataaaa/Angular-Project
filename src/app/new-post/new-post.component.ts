import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from '../content.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  constructor(private contentService: ContentService, private userService: UserService, private router: Router) { }

  createPost(form: NgForm){
    if(form.invalid){
      return;
    }
    const{heading, description, type} = form.value;
    const user = this.userService.getProfileData();
    const username = user.username;
    console.log(heading);
    console.log(description);
    console.log(type);
    console.log(username);
  
    this.contentService.createPost(heading, description, type, username).subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    })
  }
}
