import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	providers: [DataService]
})
export class HomeComponent implements OnInit {
	constructor(public dataService: DataService) {}
	Items: Object[];
	ngOnInit() {
		this.Items = this.dataService.getData();
	}
}
