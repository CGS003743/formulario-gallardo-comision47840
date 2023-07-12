import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModel } from '@angular/forms';
import{FormsModule,ReactiveFormsModule} from'@angular/forms';



@NgModule({
  declarations: [
    TemplateDrivenComponent,
    ReactiveFormsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TemplateDrivenComponent,
    ReactiveFormsComponent,
  ]
})
export class FormulariosModule { }
