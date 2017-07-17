import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	providers: [DataService]
})
export class HomeComponent implements OnInit {
	constructor(private dataService: DataService) {}
	myData: Object[];
	dynamicData: Object[];
	ngOnInit() {
		this.dataService.getStaticData().then(res => {
			debugger;
			this.myData = res.employee;
		});

		this.dataService.getDynamic().subscribe(res => {
			this.dynamicData = res.data;
		});
	}
}
