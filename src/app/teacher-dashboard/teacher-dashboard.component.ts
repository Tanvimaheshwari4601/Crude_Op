import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent implements OnInit {
  students: User[] = [];

  currentLoggedInUser: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.currentLoggedInUser = this.userService.getLoggedInUser();
  }

  userDetails(id: number) {
    this.router.navigate(['homepage/user-details', id]);
  }
}
