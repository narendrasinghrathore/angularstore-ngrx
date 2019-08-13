import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StoreModule } from '@ngrx/store';
import {counterReducer} from '../store/reducers/counter.reducer';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
  StoreModule.forRoot({count: counterReducer})
  ],
  declarations: [AppComponent, HelloComponent, CounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
