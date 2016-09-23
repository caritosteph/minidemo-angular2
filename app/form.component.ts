import {Component}  from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

import {Http} from '@angular/http';

@Component({
  selector: 'employee-form',
  templateUrl: 'app/templates/employee-form.component.html',
  providers: [ EmployeeService ]
})

export class EmployeeComponent{

  errorMessage: string;
  employees: Employee[];

  constructor(private employeeService: EmployeeService){}

  model = new Employee('Jean','30','FreeTime');
  submitted = false;

  addEmployee(model){
    if(!model) return;

    this.employeeService.addEmployee(model)
      .subscribe(
        employee => this.employees.push(employee),
        error => this.errorMessage = <any>error);
  }

  onSubmit(model){
    this.submitted = true;
    this.addEmployee(model);
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
