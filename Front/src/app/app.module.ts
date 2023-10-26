import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderButtonComponent } from './reusable_components/order-button/order-button.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LeBurguignonComponent } from './pages/le-burguignon/le-burguignon.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './reusable_components/header/header.component';
import { FooterComponent } from './reusable_components/footer/footer.component';
import { OrderingComponent } from './pages/ordering/ordering.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
		OrderButtonComponent,
		HomeComponent,
		LeBurguignonComponent,
		MenuComponent,
		ContactComponent,
		HeaderComponent,
		FooterComponent,
  		OrderingComponent
	],
	imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
