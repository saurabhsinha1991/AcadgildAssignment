import { RouterModule, Route } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { RolesComponent } from "./roles/roles.component";
import { AdminComponent } from "./admin/admin.component";
import { SuperadminComponent } from "./superadmin/superadmin.component";
import { MemberComponent } from "./member/member.component";
import { SubComponent } from "./sub/sub.component";
import { CaDeactivateGuardService } from "./ca-deactivate-guard.service";

const routes: Route[] = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", component: HomeComponent },
	{ path: "home/:id", component: SubComponent },
	{ path: "about", component: AboutComponent },
	{
		path: "contactus",
		component: ContactusComponent,
		canDeactivate: [CaDeactivateGuardService]
	},
	{
		path: "roles/:id",
		component: RolesComponent,
		children: [
			{ path: "", redirectTo: "admin", pathMatch: "full" },
			{ path: "admin", component: AdminComponent },
			{ path: "superadmin", component: SuperadminComponent },
			{ path: "member", component: MemberComponent }
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
	useHash: false
});
