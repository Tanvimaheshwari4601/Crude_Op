import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-admin-request',
  templateUrl: './new-admin-request.component.html',
  styleUrls: ['./new-admin-request.component.css']
})
export class NewAdminRequestComponent implements OnInit {

  selectedUser : any;



  user : User[]=[];

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  displayStyle = "none";
  
  openPopup(user : User) {
    this.displayStyle = "block";
    this.selectedUser = user;
  }
  closePopup() {
    this.displayStyle = "none";
    this.selectedUser = {};
  }
  newAdmin(){
    this.router.navigate(['/homepage/new-admin-request'])

  }
  Approved(){
    console.log(this.user);

  }

  deleteUser(id: number){
    
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getAdmin();
    })
  }
  private getAdmin(){
    this.userService.getAdminList().subscribe(data => {
      this.user = data;
    });
  }

}
