import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path:'users', component:UserListComponent },
  {path:'update-user/:id', component:UpdateUserComponent},
  {path:'create-user', component:CreateUserComponent },
  {path:'login-user', component:LoginUserComponent},
  {path:'',redirectTo:'login-user', pathMatch:'full'},
  {path: 'user-details/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
