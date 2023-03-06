import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] //Le decimos de donde sacar la nueva instancia de nuestro servicio.
})
export class NewAccountComponent {
  

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){ //El inyector de dependencias injectará una instancia de nuestro servicio LoggingService.

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
