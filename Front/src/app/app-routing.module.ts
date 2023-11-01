import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LeBurguignonComponent } from './pages/le-burguignon/le-burguignon.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'le_burguignon', component: LeBurguignonComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: 'contact', component: ContactComponent },
];

@NgModule({
	declarations: [],
	imports: [TooltipModule.forRoot(), [RouterModule.forRoot(routes)]],
	exports: [RouterModule],
})
export class AppRoutingModule {}
