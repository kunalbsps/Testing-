import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginpageComponent } from './loginpage.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Apiservice } from 'src/app/service/api.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    Apiservice
  ]
})
export class LoginpageModule { }
