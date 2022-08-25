import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Crud-Frontend';

  ngOnInit(): void {
    localStorage.getItem('isloggedin');
    

  }
 
}

