import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  EqualPasswords : string = "nothing";

  constructor(private userService: UserService, private router: Router, private ActivateRoute: ActivatedRoute) { }

  register(form: NgForm){
    if(form.invalid){
      return;
    }
    const {username, password, repeatPass} = form.value;
    if(password != repeatPass){
      console.log('asd');
      this.EqualPasswords = "false";
      return;
    }
   this.userService.register({username, password}).subscribe({
    next: () => {
      const redirectUrl =  '/';
      this.ActivateRoute.snapshot.queryParams.redirectUrl || '/';
      this.router.navigate([redirectUrl]);
    },
  });
  }
}
