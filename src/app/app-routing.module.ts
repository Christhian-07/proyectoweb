import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


import { HistoryComponent } from './components/history/history.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { ProfileComponent } from './components/profile/profile.component';
import { Profile2Component } from './components/profile2/profile2.component';
import { Profile3Component } from './components/profile3/profile3.component';
import { Gallery2Component } from './components/gallery2/gallery2.component';
import { Gallery3Component } from './components/gallery3/gallery3.component';
import { ReportComponent } from './components/report/report.component';
import { PasswordrecoveyComponent } from './components/passwordrecovey/passwordrecovey.component';
import { PatientregistryComponent } from './components/patientregistry/patientregistry.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'gallery',component:GalleryComponent},
  {path:'gallery2',component:Gallery2Component},
  {path:'gallery3',component:Gallery3Component},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'profile2',component:Profile2Component},
  {path:'profile3',component:Profile3Component},
  {path:'report',component:ReportComponent},
  {path:'passwordrecovery',component:PasswordrecoveyComponent},
  {path:'patientregistry',component:PatientregistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
