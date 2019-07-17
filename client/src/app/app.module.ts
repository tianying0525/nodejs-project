import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
  provide: "data",
  useClass: DataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
