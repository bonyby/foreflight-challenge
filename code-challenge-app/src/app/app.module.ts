import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WelcomeComponent } from './components/angular-welcome/welcome.component';
import { MetarComponent } from './components/metar/metar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WelcomeComponent,
    MetarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
