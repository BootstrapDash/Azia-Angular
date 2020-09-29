import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTablesComponent } from './basic-tables/basic-tables.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: 'basic-tables', component: BasicTablesComponent }
]

@NgModule({
  declarations: [BasicTablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    DataTablesModule
  ]
})
export class TablesModule { }
