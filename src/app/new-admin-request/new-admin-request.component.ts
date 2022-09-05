import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-admin-request',
  templateUrl: './new-admin-request.component.html',
  styleUrls: ['./new-admin-request.component.css']
})
export class NewAdminRequestComponent implements OnInit {

  selectedUser : any;
  

  id!:number;
  user : User[]=[];
  us : User = new User();
  currentLoggedInUser : User ;
  constructor(private router : Router, 
    private userService : UserService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.currentLoggedInUser = this.userService.getLoggedInUser();

    // this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.currentLoggedInUser.id).subscribe(data => {
      this.us = data;
    },
    error => console.log(error));
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
    console.log(this.us);

    this.userService.approveAdmin(this.selectedUser.id).subscribe(data => {
      this.router.navigate(['/users'])
      
    },
    error =>console.log(error));
    


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
