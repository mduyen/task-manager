import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Moment } from 'moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StaffListComponent } from './staff-list/staff-list.component';
// import { ProjectListComponent } from './project-list/project-list.component';
// import { ProjectAddComponent } from './project-add/project-add.component';
// import { ProjectEditComponent } from './project-edit/project-edit.component';
// import { TaskListComponent } from './task-list/task-list.component';
// import { TaskAddComponent } from './task-add/task-add.component';
// import { TaskEditComponent } from './task-edit/task-edit.component';
// import { StaffAddComponent } from './staff-add/staff-add.component';
// import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { HomeComponent } from './home/home.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { DownLoadComponent } from './down-load/down-load.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    // StaffListComponent,
    // ProjectListComponent,
    // ProjectAddComponent,
    // ProjectEditComponent,
    // TaskListComponent,
    // TaskAddComponent,
    // TaskEditComponent,
    // StaffListComponent,
    // StaffAddComponent,
    // StaffEditComponent,
    HomeComponent,
    StaffDetailComponent,
    DownLoadComponent,
    ChangePassComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
