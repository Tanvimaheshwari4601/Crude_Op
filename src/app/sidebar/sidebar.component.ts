import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  savedUser : any;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
   
   this.savedUser = this.userService.getLoggedInUser();
  }

}
