import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: 'chartjs', component: ChartjsComponent}
]

@NgModule({
  declarations: [ChartjsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ChartsModule
  ]
})
export class ChartsDemoModule { }
