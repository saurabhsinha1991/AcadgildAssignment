import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

	title: string = 'Assignment 7.3';

	roles: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  addList(role) {
  	this.roles.push(role.value);
  	role.value = '';
  }

}
