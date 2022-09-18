import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ModifyProfileComponent } from './modify-profile/modify-profile.component';
import { UsuarioService } from '../services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    UserComponent,
    ShowProfileComponent,
    ModifyProfileComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule
  ], 
  providers: [UsuarioService]
})
export class UserModule { }
