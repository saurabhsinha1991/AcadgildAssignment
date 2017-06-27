// 1
let myArray = [3, 2, 3];

function getArrLength(...arg) {
	return arg.length;
}

getArrLength(...myArray);

function multiplyByTwo(arr) {
	return arr.map( (item) => item * 2);
}

multiplyByTwo(myArray);

function sortRestArgs(...arr) {
	return arr.sort((a,b) => a - b);
}

sortRestArgs(...myArray);

//2
let apiDetail = {
	type: 'POST',
	baseUrl: 'https://google.com',
	apiParam: JSON.stringify({data: 'mydata'});
	method(response) {
		console.log(response);
	},
	header: {
        "My-First-Header":"first value",
        "My-Second-Header":"second value"
    }
}

function apiCall(obj) {
	let {type, url, apiParam, successMethod, header} = obj;

	return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open(type, url);
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response, successMethod);
            } else {
                reject(new Error(req.statusText));
            }
        };
 
        req.onerror = function() {
            reject(new Error("Network error"));
        };
 
        req.send();
    });
	
}

apiCall(apiDetail).then( (res, successMethod) => {
	successMethod(res);
})