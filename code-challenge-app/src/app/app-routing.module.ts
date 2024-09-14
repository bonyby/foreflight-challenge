import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './components/full/full.component';
import { MetarComponent } from './components/metar/metar.component';
import { TafComponent } from './components/taf/taf.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather/metar', pathMatch: 'full' },
  { path: 'weather/metar', component: MetarComponent },
  { path: 'weather/taf', component: TafComponent },
  { path: 'weather/full', component: FullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
