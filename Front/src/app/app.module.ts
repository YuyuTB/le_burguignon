import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderButtonComponent } from './reusable_components/order-button/order-button.component';
import { OrderPopupComponent } from './reusable_components/order-popup/order-popup.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
		OrderButtonComponent,
		OrderPopupComponent,
	],
	imports: [BrowserModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
