import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private userService: UserService, private router: Router) { }

  get isLoged(){
    return this.userService.isLoged;
  }

  logout(){
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
