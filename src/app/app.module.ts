import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentService } from './student.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { ListStudentsComponent } from "./components/list-students/list-students.component";

@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    CreateAccountComponent,
    NotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListStudentsComponent
],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
