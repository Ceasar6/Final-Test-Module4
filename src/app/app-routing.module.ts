import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './awesomes/list/list.component';
import {EditComponent} from './awesomes/edit/edit.component';

const routes: Routes = [
  {path: '', component: ListComponent, pathMatch: 'full'},
  {path: 'awesomes', component: ListComponent},
  {path: 'edit/:id', component: EditComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
