import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { AddMember } from './_pages/add/add.component';

const routes: Routes = [
  {
    path: 'members',
    component: MemberListComponent,
  },
  {
    path: 'AddMember',
    component: AddMember,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
