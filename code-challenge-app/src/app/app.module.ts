import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/angular-welcome/welcome.component';
import { MetarComponent } from './components/metar/metar.component';
import { NamedInfoBlockComponent } from './components/named-info-block/named-info-block.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BasicInfoBlockComponent } from './components/basic-info-block/basic-info-block.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WelcomeComponent,
    MetarComponent,
    NamedInfoBlockComponent,
    BasicInfoBlockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
