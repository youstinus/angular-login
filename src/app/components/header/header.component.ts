import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true
  isAuthenticated = false

  constructor() { }

  ngOnInit(): void {
  }

  onLogout(){
    this.isAuthenticated = false
  }

}
