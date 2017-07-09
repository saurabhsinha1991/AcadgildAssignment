import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 7.1';

  public userList: any = [
    {name: "Avnesh Shakya", age: "26", profession:"Employee"}, 
  	{name: "Adam", age: "30", profession: "Employee"}, 
  	{name: "Acadgild1", age: "28", profession: "Employee"},
  	{name: "Acadgild2", age: "26", profession: "Employee"},
  	{name: "Acadgild3", age: "27", profession: "Employee"},
  	{name: "Acadgild4", age: "28", profession: "Employee"},
  	{name: "Acadgild5", age: "29", profession: "Employee"}
  ]

  user = {
  	fname: "Saurabh",
  	lname: "Sinha",
  	role: "Interactive Developer",
  	age: 25,
  	email: "saurabh1991.sinha@gmail.com"
  }
}
