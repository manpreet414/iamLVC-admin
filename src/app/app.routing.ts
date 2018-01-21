import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: 'app/theme/theme.module#ThemeModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'forgot-password/reset/:token',
    component: ResetPasswordComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true}),HttpModule ],
  exports: [ RouterModule,HttpModule ]
})
export class AppRoutingModule { }
