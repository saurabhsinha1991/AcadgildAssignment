import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


	title: string = 'Assignment 7.2';
	selectedData: any;

	public employeeList: any = [
        {name: 'Avnesh Shakya', companyName: 'Acalgild', designation: 'Software Engineer', gender: 'male', age: 26},
        {name: 'Adam Schultz', companyName: 'Facebook', designation: 'VP-Sales', gender: 'male', age: 30},
        {name: 'Maddie Reddy', companyName: 'Snapchat', designation: 'Senior Developer', gender: 'female', age: 41},
        {name: 'Avnesh Shakya', companyName: 'Acalgild', designation: 'Software Engineer', gender: 'male', age: 26},
        {name: 'Adam Schultz', companyName: 'Facebook', designation: 'VP-Sales', gender: 'male', age: 30},
        {name: 'Maddie Reddy', companyName: 'Snapchat', designation: 'Senior Developer', gender: 'female', age: 41}

    ]
  constructor() { }

  ngOnInit() {
  }

  showItem(data) {
  	this.selectedData = data;
  }

}
