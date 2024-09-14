import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './components/full/full.component';
import { MetarComponent } from './components/metar/metar.component';
import { TafComponent } from './components/taf/taf.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather/full', pathMatch: 'full' },
  { path: 'weather/full', component: FullComponent },
  { path: 'weather/metar', component: MetarComponent },
  { path: 'weather/taf', component: TafComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
