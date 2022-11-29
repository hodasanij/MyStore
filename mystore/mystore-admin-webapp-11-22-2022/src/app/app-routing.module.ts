import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';
import { DetailsproductComponent } from './components/products/detailsproduct/detailsproduct.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewproductComponent } from './components/products/viewproduct/viewproduct.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { ListuserComponent } from './components/users/listuser/listuser.component';
import { UsersComponent } from './components/users/users.component';
import { ViewuserComponent } from './components/users/viewuser/viewuser.component';

// routes declaration
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'users',
    children: [
      { path: '', component: UsersComponent },
      { path: 'adduser', component: AdduserComponent },
      { path: 'listuser', component: ListuserComponent },
      { path: 'viewuser', component: ViewuserComponent },
    ],
  },
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: 'addproduct', component: AddproductComponent },
      { path: 'detailsproduct', component: DetailsproductComponent },
      { path: 'viewproduct', component: ViewproductComponent },
    ],
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
