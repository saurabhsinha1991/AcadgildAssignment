import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
	selector: "app-contactus",
	templateUrl: "./contactus.component.html",
	styleUrls: ["./contactus.component.css"]
})
export class ContactusComponent implements OnInit {
	constructor(public router: Router) {}
	name;
	userForm: FormGroup;
	isSubmitted: boolean = false;
	ngOnInit() {}

	onSubmit(value) {
		this.isSubmitted = true;
		this.router.navigate(["home"]);
	}

	canDeactivate() {
		console.log("I am deactiving!!");
		if (!this.isSubmitted) {
			return window.confirm("Do you want to leave your changes?");
		}
	}
}
