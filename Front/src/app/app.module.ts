import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [AppComponent, LandingPageComponent],
	imports: [BrowserModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
