import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'COJ';

  username = '';

  constructor(@Inject('auth') private auth) {
  }

  ngOnInit() {
    // if(this.auth.isAuthenticated$())
  }


  login(): void {
    this.auth.login();
  }

  logout(): void{
    this.auth.logout();
  }

}
