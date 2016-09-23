import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './form.component';

@NgModule({
  imports:  [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
