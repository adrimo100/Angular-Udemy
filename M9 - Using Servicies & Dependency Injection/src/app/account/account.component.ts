import { Component, Input} from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService] //Le decimos de donde sacar la nueva instancia de nuestro servicio.
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){ //El inyector de dependencias inyectará una instancia de nuestro servicio LoggingService.

  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
