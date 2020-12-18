import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [ { 
  path: 'employee', redirectTo: 'employee/index', pathMatch: 'full'},

{ path: 'employee/index', component: IndexComponent },
{ path: 'employee/:employeeid/edit', component: EditComponent } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
