import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
@Component({
	selector: "app-sub",
	templateUrl: "./sub.component.html",
	styleUrls: ["./sub.component.css"]
})
export class SubComponent implements OnInit {
	constructor(
		public activatedRoute: ActivatedRoute,
		public dataService: DataService
	) {}

	myData: Object;

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.myData = this.dataService.getParticularData(params["id"]);
		});
	}
}
