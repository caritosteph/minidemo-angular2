"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.headers = new http_2.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Basic ' + btoa('jcarlos:jcarlos'));
    }
    EmployeeService.prototype.addEmployee = function (employee) {
        var body = JSON.stringify(employee);
        console.log("body: ", body);
        return this.http.post('http://10.50.24.61:8081/start-vacation-process', body, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeeService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("respose: ", body.data);
        return body.data || {};
    };
    EmployeeService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map