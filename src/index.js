import {Observable, from, range, subcription, Subject} from 'rxjs';
import {map, filter, merge, reduce, debounceTime } from 'rxjs/operators';
import axios from 'axios';

/*
const observable1 = Observable.create(obj => {
    obj.next("Hello, World");
    setTimeout(()=>{
        obj.next("Hi");
    },1000);
    setTimeout(() => {
        obj.error('TIme out error, I cant wait anymore');
    },2000);
    setTimeout(() => {
        obj.next('This, is printed I will shave my head');
    },3000);
});


/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data comes from the srver');
    },2000);
})
*/
/*
const promise = axios.get('https://jsonplaceholder.typicode.com/users');
const observablePromise = from(promise);

const observer ={
    next: data=> {
        console.log('[NEXT]', data);
    },
    error: error => {
        console.log('[ERROR]', error);
    },
    complete: () => {
        console.log('[COMPLETE]', 'Observable completed');
    }
};

const observable2 = observablePromise
  .pipe(map(data => {
      return data.data;
  }),filter(data => {
      //console.log('[DATA]',data)
      return true;
  }))
  
  const mergedObservable = observable1
                                .pipe(merge(observable2));

  mergedObservable.subscribe(observer);

  

const observableRange = range (1,100);
observableRange
    .pipe(reduce( (total, val) => total + val, 0))
    .subscribe(observer);

*/
const asyncFunction = (currentValue, obj, interval, endValue) => {
    if( currentValue <= endValue){
        obj.next(currentValue);
        currentValue++;
        setTimeout(() => {
            asyncFunction(currentValue, obj, interval, endValue)
        },interval);
    } 
}
const observable  = Observable.create( obj => {
    asyncFunction(1, obj, 2100, 10);
});

observable
    .pipe(debounceTime(2000))
    .subscribe(data => {
        console.log(data);
    });

// subcription.unsubscribe();
const subject = new Subject();

subject.subscribe( (data)=> {
    console.log('[NEXT]', data);
});

subject.next(100);