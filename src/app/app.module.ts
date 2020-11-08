import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { DisplayQoutesComponent } from './display-qoutes/display-qoutes.component';
import { DisplayQuoteDetailsComponent } from './display-quote-details/display-quote-details.component';
import { TimePassedPipe } from './time-passed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormQuotesComponent,
    DisplayQoutesComponent,
    DisplayQuoteDetailsComponent,
    TimePassedPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
