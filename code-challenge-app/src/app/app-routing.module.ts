import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetarComponent } from './components/metar/metar.component';
import { TafComponent } from './components/taf/taf.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather/metar', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
  { path: 'weather/metar', component: MetarComponent },
  { path: 'weather/taf', component: TafComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
