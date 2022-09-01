import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  isSidebarOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(event : any){
    
    this.isSidebarOpen=!this.isSidebarOpen;
    console.log('Toggling sidebar', this.isSidebarOpen);
  }

}
