import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PeopleService{
  constructor (private http: Http) { }

  getEmployee(){
    URL = 'http:10.50.21.145:8081/';

    return http.get('URL')
           .map(response => response.json());
  }
}
