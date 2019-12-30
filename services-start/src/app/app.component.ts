import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: {
    name: string,
    status: string
  }[] = [];

  // Defining type of service is mandatory
  constructor(private accountsService: AccountsService) {
    // services new instance is created when mentioning in providers. The instance is passed down to the children of the current component
  }

  ngOnInit () {
    // ngOnInit should be used for initialising state of the component instead of constructor. Though it is mandatory
    this.accounts = this.accountsService.accounts;
  }
  
}
