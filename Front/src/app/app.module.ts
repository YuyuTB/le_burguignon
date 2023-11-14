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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './pages/dashboard/dashboard-header/dashboard-header.component';
import { MenuDashboardComponent } from './pages/dashboard/menu-dashboard/menu-dashboard.component';
import { CarouselCrudComponent } from './pages/dashboard/carousel-crud/carousel-crud.component';
import { ContactCrudComponent } from './pages/dashboard/contact-crud/contact-crud.component';
import { TemporaryBurgerCrudComponent } from './pages/dashboard/menu-dashboard/cruds/temporary-burger-crud/temporary-burger-crud.component';
import { SnackCrudComponent } from './pages/dashboard/menu-dashboard/cruds/snack-crud/snack-crud.component';
import { RegularBurgerCrudComponent } from './pages/dashboard/menu-dashboard/cruds/regular-burger-crud/regular-burger-crud.component';
import { DrinkCrudComponent } from './pages/dashboard/menu-dashboard/cruds/drink-crud/drink-crud.component';
import { DessertCrudComponent } from './pages/dashboard/menu-dashboard/cruds/dessert-crud/dessert-crud.component';
import { MenuCrudHeaderComponent } from './pages/dashboard/menu-dashboard/menu-crud-header/menu-crud-header.component';
import { DashboardCrudRoutingModule } from './pages/dashboard/dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreatecarouselitemComponent } from './pages/dashboard/carousel-crud/createcarouselitem/createcarouselitem.component';
import { CreatedessertComponent } from './pages/dashboard/menu-dashboard/cruds/dessert-crud/createdessert/createdessert.component';
import { CreatedrinkComponent } from './pages/dashboard/menu-dashboard/cruds/drink-crud/createdrink/createdrink.component';
import { CreateregularComponent } from './pages/dashboard/menu-dashboard/cruds/regular-burger-crud/createregular/createregular.component';
import { CreatesnackComponent } from './pages/dashboard/menu-dashboard/cruds/snack-crud/createsnack/createsnack.component';
import { CreatetemporaryComponent } from './pages/dashboard/menu-dashboard/cruds/temporary-burger-crud/createtemporary/createtemporary.component';
import { CommonModule } from '@angular/common';

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
		TemporaryBurgerCrudComponent,
		SnackCrudComponent,
		RegularBurgerCrudComponent,
		DrinkCrudComponent,
		DessertCrudComponent,
		MenuCrudHeaderComponent,
		CreatecarouselitemComponent,
		CreatedessertComponent,
		CreatedrinkComponent,
		CreateregularComponent,
		CreatesnackComponent,
		CreatetemporaryComponent,
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CarouselModule.forRoot(),
		ReactiveFormsModule,
		DashboardCrudRoutingModule,
		HttpClientModule,
		CommonModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
