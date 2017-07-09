import { Component, OnInit, Input } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	fetchingDetails: 'To get the details on click';
	@Input()
	data: EmployeeComponent;

  constructor() { }

  ngOnInit() {
  }

}
