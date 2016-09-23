import {Component}  from '@angular/core';
import {Employee} from './employee';
import {Http} from '@angular/http';

@Component({
  selector: 'employee-form',
  templateUrl: 'app/templates/employee-form.component.html'
})

@Injectable()

export class EmployeeComponent{

  constructor(private http: Http){}

  model = new Employee('Jean','30','FreeTime');
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
