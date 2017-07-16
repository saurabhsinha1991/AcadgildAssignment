import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
	constructor() {}
	data: Object[] = [
		{
			Title: "HTML5",
			Author: "Jan Doe",
			Duration: "2 hours",
			Details: "HTML5 thorough knowledge",
			Votes: 10
		},
		{
			Title: "CSS3",
			Author: "Mike",
			Duration: "2 hours",
			Details: "CSS3 thorough knowledge",
			Votes: 20
		},
		{
			Title: "JS",
			Author: "John",
			Duration: "2 hours",
			Details: "JS thorough knowledge",
			Votes: 30
		}
	];
	getData() {
		return this.data;
	}
	getParticularData(name) {
		return this.data.find(value => value["Title"] == name);
	}
}
