import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Clase2Component } from './clase2/clase2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from "@angular/forms";
import { CondicionalComponent } from './condicional/condicional.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import {MatIconModule} from '@angular/material/icon';
import { DirectAtribComponent } from './direct-atrib/direct-atrib.component';
import { LogintestComponent } from './logintest/logintest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    Clase2Component,
    BindingComponent,
    CondicionalComponent,
    RecomendacionesComponent,
    DirectAtribComponent,
    LogintestComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
