import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userActivated = false;
  private activatedSub: Subscription

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe((isActivated) => {
      this.userActivated = isActivated;
    });
  }

  ngOnDestroy(){
    this.activatedSub.unsubscribe
  }
}
