import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComingSoonPageComponent } from './components/coming-soon-page/coming-soon-page.component';
import { MailchimpFormComponent } from './components/mailchimp-form/mailchimp-form.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SocialIconsComponentComponent } from './components/common/social-icons-component/social-icons-component.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { VenueComponent } from './components/venue/venue.component';
import { FooterComponent } from './components/footer/footer.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/common/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonPageComponent,
    MailchimpFormComponent,
    LandingPageComponent,
    SocialIconsComponentComponent,
    AboutComponent,
    SpeakersComponent,
    SponsorsComponent,
    VenueComponent,
    FooterComponent,
    TicketsComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
