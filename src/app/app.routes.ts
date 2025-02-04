import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path:'login',
    component: LoginComponent
  }
];
