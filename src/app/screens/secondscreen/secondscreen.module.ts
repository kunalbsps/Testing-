import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { SecondscreenRoutingModule } from './secondscreen-routing.module';
import { SecondscreenComponent } from './secondscreen.component';
import { Apiservice } from 'src/app/service/api.service';

@NgModule({
  declarations: [
    SecondscreenComponent
  ],
  imports: [
    CommonModule,
    SecondscreenRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers:[
  Apiservice
  ]
})
export class SecondscreenModule { }
