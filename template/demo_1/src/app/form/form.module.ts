import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ColorPickerModule } from 'ngx-color-picker';
import { TinymceModule } from 'angular2-tinymce';

import { FormElementsComponent } from './form-elements/form-elements.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import { FormWizardModule } from 'angular2-wizard';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  { path: 'form-elements', component: FormElementsComponent },
]

@NgModule({
  declarations: [
    // ComponentsSidebarComponent,
     FormElementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    SharedModule,
    FormsModule,
    ColorPickerModule, 
    // Select2Module,
    NgSelectModule,
    CustomFormsModule,
    FormWizardModule,
    HttpClientModule,
    TinymceModule.withConfig({
      skin_url: '../assets/tinymce/skins/lightgray'
   }),
  ] 
})
export class FormModule { }
