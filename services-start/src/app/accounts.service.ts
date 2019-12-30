import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

// This makes the current service injectable that is the reciving service which needs other service 
@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    constructor (private logginService: LoggingService) {

    }

    addAccount(name: string, status: string) {
        this.accounts.push({
            name: name,
            status: status 
        });
        this.logginService.logStatusChange(status);
    }
    
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.logginService.logStatusChange(status);
    }
}