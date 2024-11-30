import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',component: MainHomeComponent,pathMatch:'full'},
  {path:'create',component: CreateAccountComponent},
  {path:"**", component:NotFoundComponent} // fa messo alla fine per funzionare
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
