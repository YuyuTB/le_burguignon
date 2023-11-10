import { RouterModule, Routes } from '@angular/router';
import { CarouselCrudComponent } from './carousel-crud/carousel-crud.component';
import { ContactCrudComponent } from './contact-crud/contact-crud.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { DessertCrudComponent } from './menu-dashboard/cruds/dessert-crud/dessert-crud.component';
import { DrinkCrudComponent } from './menu-dashboard/cruds/drink-crud/drink-crud.component';
import { RegularBurgerCrudComponent } from './menu-dashboard/cruds/regular-burger-crud/regular-burger-crud.component';
import { SnackCrudComponent } from './menu-dashboard/cruds/snack-crud/snack-crud.component';
import { TemporaryBurgerCrudComponent } from './menu-dashboard/cruds/temporary-burger-crud/temporary-burger-crud.component';

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{ path: '', redirectTo: 'menu/regular-burger-crud', pathMatch: 'full' },
			{ path: 'carousel-crud', component: CarouselCrudComponent },
			{
				path: 'menu',
				component: MenuDashboardComponent,
				children: [
					{ path: '', redirectTo: 'regular-burger-crud', pathMatch: 'full' },
					{ path: 'dessert-crud', component: DessertCrudComponent },
					{ path: 'drink-crud', component: DrinkCrudComponent },
					{
						path: 'regular-burger-crud',
						component: RegularBurgerCrudComponent,
					},
					{ path: 'snack-crud', component: SnackCrudComponent },
					{
						path: 'temporary-burger-crud',
						component: TemporaryBurgerCrudComponent,
					},
				],
			},
			{ path: 'contact-crud', component: ContactCrudComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardCrudRoutingModule {}
