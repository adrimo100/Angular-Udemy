import { Injectable } from '@angular/core';

//Servicio falso. Habría que llamar a algún servidor para verificar.
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  isAutheticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800)
    });
    return promise;
  }
  
  login(){
    this.loggedIn = true;
    alert("logged!");
  }

  logout(){
    this.loggedIn = false;
    alert("session closed!");
  }
}
