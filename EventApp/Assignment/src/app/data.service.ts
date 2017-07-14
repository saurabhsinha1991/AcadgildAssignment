import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';


@Injectable()
export class DataService {

  constructor(
  	public http: Http
  ) { }


  getEvents(): Observable<any> {
  	return this.http.get('https://api.myjson.com/bins/97zqj').map((res: Response) => res.json());
  }


  setEvent(obj: Object) {
  	let newData = JSON.parse(localStorage.events);
  	newData.push(obj)
  	localStorage.setItem('events', JSON.stringify(newData));
  }

  setVote(index: number, event: Object) {
  	let data = JSON.parse(localStorage.events);
  	data[index] = event;
  	localStorage.setItem('events', JSON.stringify(data));
  }
}
