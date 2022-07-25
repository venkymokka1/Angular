import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporterComponent } from './reporter/reporter.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeReporterComponent } from './employee-reporter/employee-reporter.component';
import { AddemploeyeReporterComponent } from './addemploeye-reporter/addemploeye-reporter.component';
import { OutputComponent } from './output/output.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { GetAllManagersComponent } from './get-all-managers/get-all-managers.component';
import { DesignationComponent } from './designation/designation.component';

const routes: Routes = [
  {
    path: 'app-reporter', component: ReporterComponent},
    {path: 'app-designation', component: DesignationComponent},
    {path: 'app-employee', component: EmployeeComponent},
    {path: 'app-employee-reporter', component: EmployeeReporterComponent},
    {path: 'app-addemploeye-reporter', component: AddemploeyeReporterComponent},
    {path: 'app-output', component: OutputComponent},
    {path: 'app-get-all-employees', component: GetAllEmployeesComponent},
    {path: 'app-get-all-managers', component: GetAllManagersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
