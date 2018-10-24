import { AppRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import {FormsModule} from '@angular/forms';
import { DisplayComponent } from './components/display/display.component';
import { ReviewComponent } from './components/review/review.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AccomodationsComponent } from './components/accomodations/accomodations.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    DisplayComponent,
    ReviewComponent,
    AboutUsComponent,
    ContactUsComponent,
    AccomodationsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
