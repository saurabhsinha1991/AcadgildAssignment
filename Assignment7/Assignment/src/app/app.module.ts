import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDisplayComponent } from './role-display/role-display.component';
import { RoleDisplayListComponent } from './role-display-list/role-display-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    RoleListComponent,
    RoleDisplayComponent,
    RoleDisplayListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
