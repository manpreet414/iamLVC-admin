import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomFormsModule } from 'ng2-validation'
import { MaterializeModule } from 'angular2-materialize';
import { ImageUploadModule } from 'ng2-imageupload';
import { CKEditorModule } from 'ngx-ckeditor';

import { AppRoutingModule } from './app.routing';
import { AppSharedModule } from './shared/app-shared.module';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterializeModule,
    ImageUploadModule,
    CKEditorModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),
    AppSharedModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
