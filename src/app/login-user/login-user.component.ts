import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user:User=new User();
  loginApiError : String;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    console.log(this.user);
    this.userService.loginUser(this.user.emailid, this.user.password).subscribe(data=>{
      console.log(data);
      
    },

    error=>{
      console.log(error)
      this.loginApiError=error.error.message;
      console.log(this.loginApiError);
      

    
    });;
    
  }

}
