import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  {path:'',component: MainHomeComponent,pathMatch:'full'},
  {path:'create',component: CreateAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
