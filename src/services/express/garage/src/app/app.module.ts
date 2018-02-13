import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { DatabaseService } from './services/database.service';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addcar', component: AddcarComponent},
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
    AddcarComponent,
    SummaryComponent,
    JobsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
