import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeEditComponent } from './time-edit/time-edit.component';
import { KursComponent } from './kurs/kurs.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
{ path: '', redirectTo: '/timeEdit', pathMatch: 'full'}, 
{ path: 'timeEdit', component: TimeEditComponent},
{ path: 'kurs', component: KursComponent}
]

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
