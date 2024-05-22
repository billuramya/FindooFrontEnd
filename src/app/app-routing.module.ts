import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashBordComponent } from './Components/dash-bord/dash-bord.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { GetnotesComponent } from './Components/get-notes/get-notes.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { ReviewComponent } from './Components/review/review.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { SecondReviewComponent } from './Components/second-review/second-review.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';

const routes: Routes = [ {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
 {path:'Register',component:RegisterComponent},
 {path:'forgot',component:ForgotComponent },
 {path:'reset',component:ResetpasswordComponent},
  {path:'get',component:GetnotesComponent},
  {path:'trash',component:TrashComponent},
  {path:'archive',component:ArchiveComponent},
  {path:'review',component:ReviewComponent},
  {path:'second',component:SecondReviewComponent},
  {path:'datasharing',component:DataSharingComponent},
 { path: 'dashboard', component: DashBordComponent,
 canActivate:[AuthguardGuard],
  children: [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'notes', component: GetnotesComponent },
  { path: 'trash', component: TrashComponent },
  {path:'archive',component:ArchiveComponent}
]} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
