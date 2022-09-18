import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ModifyProfileComponent } from './modify-profile/modify-profile.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'profile', component: ShowProfileComponent },
  { path: 'profileChanges', component: ModifyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
