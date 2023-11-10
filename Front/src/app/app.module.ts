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
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './pages/dashboard/dashboard-header/dashboard-header.component';
import { MenuDashboardComponent } from './pages/dashboard/menu-dashboard/menu-dashboard.component';
import { CarouselCrudComponent } from './pages/dashboard/carousel-crud/carousel-crud.component';
import { ContactCrudComponent } from './pages/dashboard/contact-crud/contact-crud.component';
import { CrudModelComponent } from './pages/dashboard/crud-model/crud-model.component';
import { TemporaryBurgerCrudComponent } from './pages/dashboard/menu-dashboard/cruds/temporary-burger-crud/temporary-burger-crud.component';
import { SnackCrudComponent } from './pages/dashboard/menu-dashboard/cruds/snack-crud/snack-crud.component';
import { RegularBurgerCrudComponent } from './pages/dashboard/menu-dashboard/cruds/regular-burger-crud/regular-burger-crud.component';
import { DrinkCrudComponent } from './pages/dashboard/menu-dashboard/cruds/drink-crud/drink-crud.component';
import { DessertCrudComponent } from './pages/dashboard/menu-dashboard/cruds/dessert-crud/dessert-crud.component';
import { MenuCrudHeaderComponent } from './pages/dashboard/menu-dashboard/menu-crud-header/menu-crud-header.component';
import { DashboardCrudRoutingModule } from './pages/dashboard/dashboard-routing.module';

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
		LoginComponent,
		DashboardComponent,
		DashboardHeaderComponent,
		MenuDashboardComponent,
		CarouselCrudComponent,
		ContactCrudComponent,
		CrudModelComponent,
		TemporaryBurgerCrudComponent,
		SnackCrudComponent,
		RegularBurgerCrudComponent,
		DrinkCrudComponent,
		DessertCrudComponent,
		MenuCrudHeaderComponent,
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CarouselModule.forRoot(),
		ReactiveFormsModule,
		DashboardCrudRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
