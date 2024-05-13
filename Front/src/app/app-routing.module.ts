import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LeBurguignonComponent } from './pages/le-burguignon/le-burguignon.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './pages/login/login.component';
import { LegalMentionsComponent } from './pages/legal-mentions/legal-mentions.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection.component';

const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'le_burguignon', component: LeBurguignonComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'legal', component: LegalMentionsComponent },
	{ path: 'data_protection', component: DataProtectionComponent },
	
];

@NgModule({
	declarations: [],
	imports: [TooltipModule.forRoot(), [RouterModule.forRoot(routes)]],
	exports: [RouterModule],
})
export class AppRoutingModule {}
