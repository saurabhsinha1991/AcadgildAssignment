import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
  providers: [ DataService ]
})
export class EventFormComponent implements OnInit {

	user: Object = {};

  isClicked: number;
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    value["Duration"] = value["Duration"] + " hours"
    value["Votes"] = 0;
  	this.dataService.setEvent(value);
  }

}
