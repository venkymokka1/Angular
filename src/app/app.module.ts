import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReporterComponent } from './reporter/reporter.component';
import { EmployeeReporterComponent } from './employee-reporter/employee-reporter.component';
import { AddemploeyeReporterComponent } from './addemploeye-reporter/addemploeye-reporter.component';
import { OutputComponent } from './output/output.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { GetAllManagersComponent } from './get-all-managers/get-all-managers.component';
import { DesignationComponent } from './designation/designation.component';
import { TestComponent } from './test/test.component';
import { DevComponent } from './dev/dev.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ReporterComponent,
    EmployeeReporterComponent,
    OutputComponent,
    AddemploeyeReporterComponent,
    GetAllEmployeesComponent,
    GetAllManagersComponent,
    DesignationComponent,
    TestComponent,
    DevComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    NoopAnimationsModule,
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { }