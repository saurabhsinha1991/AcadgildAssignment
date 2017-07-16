import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routing } from "./app.router";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { RolesComponent } from "./roles/roles.component";
import { AdminComponent } from "./admin/admin.component";
import { SuperadminComponent } from "./superadmin/superadmin.component";
import { MemberComponent } from "./member/member.component";

import { CaDeactivateGuardService } from "./ca-deactivate-guard.service";
import { DataService } from "./data.service";
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    RolesComponent,
    AdminComponent,
    SuperadminComponent,
    MemberComponent,
    SubComponent
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [CaDeactivateGuardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
