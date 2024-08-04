import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './sharedmodule/error404/error404.component';
import { ServicesComponent } from './pages/services/services.component';
import { SingleserviceComponent } from './pages/services/components/singleservice/singleservice.component';
import { PortfilioComponent } from './pages/portfilio/portfilio.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'single-service', component: SingleserviceComponent },
  { path: 'portfolio', component: PortfilioComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact-us', component: ContactusComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
