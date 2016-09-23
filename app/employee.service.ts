import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Employee }           from './employee';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EmployeeService{

  public headers:Headers;

  constructor (private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic ' + btoa('jcarlos:jcarlos'));
  }

  addEmployee(employee) : Observable<Employee> {
      let body = JSON.stringify(employee);
      console.log("body: ",body);
      return this.http.post('http://10.50.24.61:8081/start-vacation-process', body, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("respose: ",body.data);
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
