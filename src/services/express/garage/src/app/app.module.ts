import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { SummaryComponent } from './components/summary/summary.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { DatabaseService } from './services/database.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'jobs', component: JobsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddCarComponent,
    SummaryComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
