import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfilioComponent } from './pages/portfilio/portfilio.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SingleserviceComponent } from './pages/services/components/singleservice/singleservice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PortfilioComponent,
    AboutusComponent,
    PricingComponent,
    ContactusComponent,
    SingleserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
