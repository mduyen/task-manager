import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



import { StaffDetailComponent } from './staff-detail/staff-detail.component';

import { ChangePassComponent } from './change-pass/change-pass.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DownLoadComponent } from './down-load/down-load.component';
import { protectGuard } from './protect.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'list-project',
  //   component: ProjectListComponent
  // },
  // {
  //   path: 'list-staff',
  //   component: StaffListComponent
  // },
  // {
  //   path: 'list-task',
  //   component: TaskListComponent
  // },
  // {
  //   path: 'add-project',
  //   component: ProjectAddComponent
  // },
  // {
  //   path: 'add-task',
  //   component: TaskAddComponent
  // },
  // {
  //   path: 'add-staff',
  //   component: StaffAddComponent
  // },
  // {
  //   path: 'list-project/edit/:id',
  //   component: ProjectEditComponent
  // },
  // {
  //   path: 'list-staff/edit/:id',
  //   component: StaffEditComponent
  // },

  { path:'login',
   component:SignInComponent
  },

  { path:'sign-up',
   component:SignUpComponent
  },

  { path:'change-pass', 
    component:ChangePassComponent, 
    canActivate:[protectGuard], 
  },  

  { path:'download', 
    component:DownLoadComponent, 
    canActivate:[protectGuard], 
  },

  { path: 'leader', loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
