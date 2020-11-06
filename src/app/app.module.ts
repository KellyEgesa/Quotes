import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { DisplayQoutesComponent } from './display-qoutes/display-qoutes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormQuotesComponent,
    DisplayQoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
