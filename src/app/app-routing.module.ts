import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  
  {path:'login-user', component:LoginUserComponent},
  {path:'',redirectTo:'homepage', pathMatch:'full'},
  {
    path:'registration', component:CreateUserComponent
  },


  {path:'homepage', component:HomepageComponent, canActivate:[AuthenticationGuard], children:[
    {
      path:'', redirectTo:'users',pathMatch:'full'
    },
    {
      path:'users', component:UserListComponent
    },
    {path:'update-user/:id', component:UpdateUserComponent},
    {path:'create-user', component:CreateUserComponent},
    {path: 'user-details/:id', component: UserDetailsComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
