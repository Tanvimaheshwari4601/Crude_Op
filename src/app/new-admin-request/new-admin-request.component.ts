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
  action : string;
  id!:number;
  user : User[]=[];
  us : User = new User();
  statusMap: {[key: string]: {
    [key : string] : string
  }} = {
    APPROVE : {
      'title' : 'Approve',
    },
    'REJECT' : {
      title : 'Reject',
    },
    'DELETE' : {
      title : 'Delete',
    }

  }
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
  
  openPopup(user : User, action : string) {
    this.displayStyle = "block";
    this.selectedUser = user;
    this.action = action;
  }
  closePopup() {
    this.displayStyle = "none";
    this.selectedUser = {};
  }
  newAdmin(){
    this.router.navigate(['/homepage/new-admin-request'])

  }
  approve(){
    console.log(this.us);

    this.userService.approveAdmin(this.selectedUser.id).subscribe(data => {
      this.getAdmin();

    },
    error =>console.log(error));
    


  }
  deny(){
    console.log(this.us);
    this.userService.denyAdmin(this.selectedUser.id).subscribe(data => {
      this.getAdmin();

    },
    error => console.log(error));
    
    
  }

  deleteUser(){
    
    this.userService.deleteUser(this.selectedUser.id).subscribe( data => {
      console.log(data);
      this.getAdmin();
    })
  }
  private getAdmin(){
    this.userService.getAdminList().subscribe(data => {
      this.user = data;
    });
  }

  handleAction(){
    if(this.action == "APPROVE"){
      this.approve();
    } else if(this.action == "REJECT"){
      this.deny();
    } else if(this.action == "DELETE"){
      this.deleteUser();
    }
    this.closePopup();

  }
  
}
