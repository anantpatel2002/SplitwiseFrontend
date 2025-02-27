import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { LoggedInHeaderComponent } from './logged-in-header/logged-in-header.component';
import { FooterComponent } from './footer/footer.component';
import { SecondaryFooterComponent } from './secondary-footer/secondary-footer.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import { GroupComponent } from './main-page/group/group.component';
import { ExpenseComponent } from './main-page/group/expense/expense.component';
import { RecentActivityComponent } from './main-page/recent-activity/recent-activity.component';
import { ProComponent } from './main-page/pro/pro.component';
import { RightSidebarComponent } from './main-page/right-sidebar/right-sidebar.component';
import { NewGroupComponent } from './new-group/new-group.component';

export const routes: Routes = [
  // {
  //   path: 'homepage',
  //   component: HomepageComponent,
  // },
  {
    path: 'homepage',
    children: [
      {
        path:'',
        component: HomepageComponent
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
      }
    ]
  },
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path:'login',
    children: [
      {
        path:'',
        component: LoginComponent
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
      }
    ]
  },
  {
    path:'main-page',
    children: [
      {
        path:'',
        component: MainPageComponent,
        children: [
          {
            path:'',
            redirectTo: 'dashboard',
            pathMatch: 'prefix'
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'dashboard',
            component: ProComponent,
            outlet: 'right-sidebar'
          },
          {
            path: 'recent-activity',
            component: RecentActivityComponent
          },
          {
            path: 'recent-activity',
            component: RightSidebarComponent,
            outlet: 'right-sidebar'
          },
          {
            path: 'group/:id',
            component: GroupComponent
          }
        ]
      },
      {
        path: '',
        component: LoggedInHeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: SecondaryFooterComponent,
        outlet: 'footer'
      }
    ]
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'group/new',
    component:NewGroupComponent
  },
  {
    path:'primary-header',
    component: HeaderComponent,
    outlet: 'header'
  },
  {
    path:'secondary-header',
    component: LoggedInHeaderComponent,
    outlet: 'header'
  },
  {
    path:'primary-footer',
    component: FooterComponent,
    outlet: 'footer'
  },
  {
    path:'secondary-footer',
    component: SecondaryFooterComponent,
    outlet: 'footer'
  }
];
