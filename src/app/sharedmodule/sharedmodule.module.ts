import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import { ConsultationformComponent } from './consultationform/consultationform.component';
import { LetstalkComponent } from './letstalk/letstalk.component';


const exporetedcomponents =  [
  Error404Component,
  NavbarComponent,
  FooterComponent,
  MainlayoutComponent,
  LoadingspinnerComponent,
  ConsultationformComponent,
  LetstalkComponent
]

@NgModule({
  declarations: [
    Error404Component,
    NavbarComponent,
    FooterComponent,
    MainlayoutComponent,
    LoadingspinnerComponent,
    ConsultationformComponent,
    LetstalkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...exporetedcomponents
  ]
})
export class SharedmoduleModule { }
