import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [DataService]
})
export class EventListComponent implements OnInit {

  title: string = 'Upcoming Events';

  Events: Object[] = [];
  constructor(public dataService: DataService, public LocalStorage: LocalStorageService) { }

  ngOnInit() {
    debugger;
    if(localStorage.getItem('events') === null || localStorage.getItem('events') === undefined) {
      this.dataService.getEvents().subscribe((res) => {this.Events = res.data; localStorage.setItem('events', JSON.stringify(res.data))});
    } else {
      this.Events = JSON.parse(localStorage.getItem('events'));
    }
  }

  voteUp(index, event) {
    this.Events[index]["Votes"] =  event["Votes"] + 1;
    this.dataService.setVote(index, event);
  }

  voteDown(index, event) {
    if(event["Votes"] != 0) {
      this.Events[index]["Votes"] =  event["Votes"] - 1;
    }
  }
}
