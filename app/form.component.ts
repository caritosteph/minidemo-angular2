import {Component}  from '@angular/core';
import {Employee} from './employee';

@Component({
  selector: 'employee-form',
  templateUrl: 'app/templates/employee-form.component.html'
})

export class EmployeeComponent{
  model = new Employee('Jean','30','FreeTime');
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
