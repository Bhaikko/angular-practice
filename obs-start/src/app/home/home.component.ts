import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // using observable
    // this.firstObsSubscription = interval(1000).subscribe(count => console.log(count));

    const customIntervalObservable = Observable.create(observer => {
      // it is rare to use custom observable
      let count = 0;
      setInterval(() => {
        observer.next(count);  // handling data
        // observer.error() for handling errors
        // observer.complete() to complete observable
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          // When error is thrown, it is also unsubscribed
          observer.error(new Error("Count is greater than 3!!!!"));
        }
        count++;
      }, 1000);

    });
    

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      // first function is data stream react function
      console.log(data);
    }, err => {
      // err function is throw as second function
      // auto unsubscribed by now
      console.log(err);
      alert(err);
    }, () => {
      // third function is completion function
      // auto unsubscribed by now
      console.log("Completed");
    });
  }

  ngOnDestroy (): void {
    this.firstObsSubscription.unsubscribe();
  }
}
