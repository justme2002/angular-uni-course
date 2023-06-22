import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BeveragesComponent } from './beverages/beverages.component';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    BeveragesComponent,
    AdDirective,
    AdBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
