import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { IconsComponent } from './icons/icons.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'icons', component: IconsComponent }
]

@NgModule({
  declarations: [
    // ComponentsSidebarComponent, 
    ButtonsComponent, DropdownComponent, IconsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule
  ]
})
export class UiElementsModule { }