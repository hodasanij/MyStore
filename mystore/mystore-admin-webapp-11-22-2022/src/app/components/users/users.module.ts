import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UsersService } from 'src/app/services/users.service';

@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ListuserComponent,
  ],
  imports: [CommonModule],
  providers: [UsersService],
})
export class UsersModule {}
