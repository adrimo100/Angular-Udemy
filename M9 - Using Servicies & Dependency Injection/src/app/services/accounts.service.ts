import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({ //Indica que se le pueden injectar cosas a esta clase. Se recomiendo añadirlo siempre.
  providedIn: 'root'
})
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

  //Inyección del servicio en este servicio. Para este caso (inyección de servicio en servicio) debemos tener el decorador @Injectable.
  constructor(private logginService: LoggingService) { } 

  addAcount(name: string, status: string){
    this.accounts.push({name: name, status: status})
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }
}
