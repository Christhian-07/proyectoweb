import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { ReportComponent } from './components/report/report.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Gallery2Component } from './components/gallery2/gallery2.component';
import { Gallery3Component } from './components/gallery3/gallery3.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PasswordrecoveyComponent } from './components/passwordrecovey/passwordrecovey.component';
import { PatientregistryComponent } from './components/patientregistry/patientregistry.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Profile2Component } from './components/profile2/profile2.component';
import { Profile3Component } from './components/profile3/profile3.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ReportComponent,
    GalleryComponent,
    Gallery2Component,
    Gallery3Component,
    LoginComponent,
    MainComponent,
    PasswordrecoveyComponent,
    PatientregistryComponent,
    ProfileComponent,
    Profile2Component,
    Profile3Component,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
