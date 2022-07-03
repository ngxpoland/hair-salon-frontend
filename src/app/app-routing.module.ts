import { FullscreenTemplateComponent } from './layouts/fullscreen/fullscreen-template.component';
import { DefaultTemplateComponent } from './layouts/default/default-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DefaultTemplateComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      }
    ]
  },
  {
    path: 'about',
    component: FullscreenTemplateComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
      }
    ]
  },
  {
    path: 'home',
    component: DefaultTemplateComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  },
  {
    path: 'clients',
    component: DefaultTemplateComponent,
    children: [
      {
        path: '',
        component: ClientListComponent,
      }
    ]
  },
  {
    path: '**',
    component: FullscreenTemplateComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
