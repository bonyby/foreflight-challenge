import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/angular-welcome/welcome.component';
import { BasicInfoBlockComponent } from './components/basic-info-block/basic-info-block.component';
import { MetarComponent } from './components/metar/metar.component';
import { NamedInfoBlockComponent } from './components/named-info-block/named-info-block.component';
import { TafComponent } from './components/taf/taf.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FullComponent } from './components/full/full.component';
import { IcaoInputComponent } from './components/icao-input/icao-input.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoadingReportComponent } from './components/loading-report/loading-report.component';
import { ReportLookupHistoryComponent } from './components/report-lookup-history/report-lookup-history.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WelcomeComponent,
    MetarComponent,
    NamedInfoBlockComponent,
    BasicInfoBlockComponent,
    TafComponent,
    FullComponent,
    IcaoInputComponent,
    NavigationComponent,
    LoadingReportComponent,
    ReportLookupHistoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
