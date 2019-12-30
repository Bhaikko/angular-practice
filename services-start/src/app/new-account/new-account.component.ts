import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // Services are mentioned here for angular to create instance in the component
})
export class NewAccountComponent {

  constructor (private logginService: LoggingService, private accountService: AccountsService) {
    // This allows angular to make use of service 
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.logginService.logStatusChange(accountStatus);  
    
  }
}
