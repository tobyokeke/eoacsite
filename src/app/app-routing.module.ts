import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {ServiceDetailsComponent} from './pages/service-details/service-details.component';
import {AllServicesComponent} from './pages/all-services/all-services.component';
import {ContactComponent} from './pages/contact/contact.component';
import {SectorsComponent} from './pages/sectors/sectors.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'sectors', component: SectorsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent, children : [
      {path: ':index', component : ServiceDetailsComponent },
      {path: '', component : AllServicesComponent, pathMatch : 'full'},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
