import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-display',
  templateUrl: './role-display.component.html',
  styleUrls: ['./role-display.component.css']
})
export class RoleDisplayComponent implements OnInit {

	title: string = 'Assignment 7.4';

	selectedRolesList: string[];
	public userList: any = [
        {name: 'Adam', age: 26, company: 'Acalgild', gender: 'male', role: 'User'},
        {name: 'mark Schultz', age: 30, company: 'Facebook', gender: 'male', role: 'Admin'},
        {name: ' khabnn ', age: 41, company: 'Twitter', gender: 'female', role: 'Supervisor'},
        {name: ' Preeti Rao', age: 21, company: 'Uber', gender: 'male', role: 'Super Admin'},
        {name: 'Amit khan', age: 55, company: 'LinkedIn', gender: 'male', role: 'Supervisor'},
        {name: 'Joe root', age: 20, company: 'Airbnb', gender: 'male', role: 'User'},
        {name: 'Kounth kjuinm ', age: 23, company: 'Google', gender: 'female', role: 'Supervisor'},
        {name: 'David McIntyre', age: 33, company: 'Tesla', gender: 'male', role: 'User'}
    ]
  constructor() { }

  ngOnInit() {
  }

  displayNames(role, e) {
  	e.preventDefault();
  	this.selectedRolesList = this.userList.map( (item) => {
  		if(item.role === role) {
  			return item.name;
  		}
  	});
  }

}
