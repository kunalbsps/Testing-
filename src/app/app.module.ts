import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/screens/header/header.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../app/Reducers/header.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    NgxSpinnerModule,
   BrowserAnimationsModule,
  
  
    StoreModule.forRoot({ count: counterReducer }),
       
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
