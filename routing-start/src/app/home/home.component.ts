import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Router is injected into the class from component to use it
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    // /servers is absolute path and servers is relative path
    // used to navigate programmatically
    this.router.navigate(["/servers", id, 'edit'], {
      queryParams: {
        allowEdit: '1'
      },
      fragment: 'loading'
    });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
