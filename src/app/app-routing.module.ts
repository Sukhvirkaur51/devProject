import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeducationComponent } from './addeducation/addeducation.component';
import { AddexperienceComponent } from './addexperience/addexperience.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'',
    component:HomeComponent
  },

  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'post',
    component:PostComponent
  },

  {
    path:'createprofile',
    component:CreateProfileComponent
  },

  {
    path:'dashboard1',
    component:Dashboard1Component
  },

  {
    path:'editprofile',
    component:EditprofileComponent
  },
  {
    path:'addexperience',
    component:AddexperienceComponent
  },
  {
    path:'addeducation',
    component:AddeducationComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
