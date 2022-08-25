import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user:User=new User();
  registrationAPIerror :String;
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.gotoUserList();
    },
    error=>{console.log(error)
    this.registrationAPIerror=error.error.message;

    console.log(this.registrationAPIerror);  });
  }

  gotoUserList(){
    this.router.navigate(['/users']);
  }
  onSubmit(){
    console.log(this.user);
    this.saveUser();
    
  }
  
    

}
