import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  private customIntervalSuscription: Subscription;
  roundMessage = "";

  constructor() { }

  ngOnInit() {
  //  this.firstObsSubscription = interval(1000).subscribe(count => {
  //     console.log(count)
  //   })

  const customIntervalObservable = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count) //next() emite un nuevo valor.
      if(count == 2)
        observer.complete();
      if(count > 3)
        observer.error("count is greater than 3")
      count++;
    }, 1000)
  })

  

  this.customIntervalSuscription = customIntervalObservable.pipe(map((data: number) => {
    return "Round: " + (data + 1);
  }))
  .subscribe((count: string) => {
    console.log(count)
    this.roundMessage = count;
    }, error => {
    alert(error)
    }, () => {
      alert("Completed!")
    })
  }

  ngOnDestroy(){
    //this.firstObsSubscription.unsubscribe();
    this.customIntervalSuscription.unsubscribe();
  }
}
