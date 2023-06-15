import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { JoinComponent } from './join/join.component';
import { LognInComponent } from './logn-in/logn-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const routes: Routes = [{ path: '', component: EmployeeComponent },
                        { path: 'join', component: JoinComponent },
                        { path: 'logn-in', component: LognInComponent },
                        { path: 'sign-up', component: SignUpComponent },
                       
  
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
