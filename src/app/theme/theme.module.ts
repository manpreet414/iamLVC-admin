import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../shared/app-shared.module';
import { ThemeRoutingModule } from './theme.routing';
import { MaterializeModule } from 'angular2-materialize';

import { ThemeService } from "./theme.service";
import { ThemeComponent } from './theme.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  imports: [
    AppSharedModule,
    ThemeRoutingModule,
    MaterializeModule,
    CommonModule,
    
  ],
  providers: [ThemeService],
  declarations: [ThemeComponent, HeaderComponent, SidebarComponent, FooterComponent, BreadcrumbsComponent]
})
export class ThemeModule { }
