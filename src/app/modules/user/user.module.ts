import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    //este es el modulo contenedor//
    SharedModule
  ]
})
export class UserModule { }
