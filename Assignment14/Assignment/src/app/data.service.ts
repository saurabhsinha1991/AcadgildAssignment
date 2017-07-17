import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
	constructor(private http: Http) {}

	sendData: Object = {
		productCode: 2323,
		productName: "Nikon",
		productLine: "Nikon with body and Lens",
		buyPrice: "30000"
	};
	getStaticData() {
		return this.http
			.get("./app/data.json")
			.toPromise()
			.then(res => {
				debugger;
				res.json();
			})
			.catch(err => err);
	}

	getDynamic(): Observable<any> {
		return this.http
			.get("https://api.myjson.com/bins/97zqj")
			.map((res: Response) => res.json());
	}

	postRequest(): Observable<any> {
		return this.http
			.post(this.url, this.sendData, {
				headers: new HttpHeaders().set("Authorization", "my-auth-token")
			})
			.map(res => res.json())
			.catch("Error posting request!!");
	}
}
