import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import { AuthenticationGuard } from './authentication.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewAdminRequestComponent } from './new-admin-request/new-admin-request.component';
import { HeadersInterceptor } from './headers.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    LoginUserComponent,
    HeaderComponent,
    HomepageComponent,
    AddProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    SidebarComponent,
    NewAdminRequestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticationGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HeadersInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
}
)

export class AppModule { }
