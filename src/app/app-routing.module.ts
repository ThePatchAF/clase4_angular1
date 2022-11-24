import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CondicionalComponent } from './condicional/condicional.component';
import { DescriptionComponent } from './description/description.component';
import { DirectAtribComponent } from './direct-atrib/direct-atrib.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: "home", component: HomeComponent},
  { path: 'binding', component: BindingComponent},
  { path: 'direct-atrib', component: DirectAtribComponent},
  { path: 'condicional', component: CondicionalComponent},
  { path: 'descripcion/:id', component: DescriptionComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
