import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-role-display-list',
  templateUrl: './role-display-list.component.html',
  styleUrls: ['./role-display-list.component.css']
})
export class RoleDisplayListComponent implements OnInit {
  
  @Input()
  data: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
