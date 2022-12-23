import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  Roles = ['TEACHER', 'STUDENT'];

  user: User = new User();
  registrationAPIerror: string;
  constructor(private userService: UserService, private router: Router) {}

  saveUser() {
    this.userService.createUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.gotoUserList();
      },
      error: (err) => {
        console.log(err);
        this.registrationAPIerror = err.error.message;
        console.log(this.registrationAPIerror);
      },
    });
  }

  gotoUserList() {
    this.router.navigate(['/homepage/users']);
  }
  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
