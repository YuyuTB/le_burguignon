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
import { MenuCardComponent } from './reusable_components/menu-card/menu-card.component';
import { CarouselComponent } from './reusable_components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DescriptiveCardComponent } from './reusable_components/descriptive-card/descriptive-card.component';
import { ReactiveFormsModule } from '@angular/forms';

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
		OrderingComponent,
		MenuCardComponent,
		CarouselComponent,
		DescriptiveCardComponent,
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CarouselModule.forRoot(),
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
