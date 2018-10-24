import { AccomodationsComponent } from './components/accomodations/accomodations.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ReviewComponent } from './components/review/review.component';
import { DisplayComponent } from './components/display/display.component';

import { HomeComponent } from './components/home/home.component';
import {Routes, RouterModule} from '@angular/router'
import { BookingComponent } from "./components/booking/booking.component";


const routes: Routes = [
    {path: 'home',component : HomeComponent},
    {path: 'booking', component: BookingComponent},
    {
        path: 'accomodations', component: AccomodationsComponent
    },
    {
        path: 'aboutus', component: AboutUsComponent
   },
   {
    path: 'contactus', component: ContactUsComponent
},



    {path: 'display', component: DisplayComponent},
    // children: [
    //     {
    //          path: 'review', component: ReviewComponent
    //     }
    // ]}
    
    {
        path: 'review', component: ReviewComponent
   }




];



export const AppRoutes = RouterModule.forRoot(routes);