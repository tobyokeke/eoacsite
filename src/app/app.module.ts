import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import {ServiceDetailsComponent} from './pages/service-details/service-details.component';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SectorsComponent } from './pages/sectors/sectors.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    AllServicesComponent,
    ContactComponent,
    SectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
