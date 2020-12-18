import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';
import { ignoreElements } from 'rxjs/operators';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public employeeService: EmployeeService) { }

 ngOnInit(): void {

						this.employeeService.getAll().subscribe((data: Employee[])=>{
              debugger;
               //@ts-ignore
							  this.employees = data.data;

							  console.log(this.employees);

							})  

						  }


}
