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
import { CreatecarouselitemComponent } from './carousel-crud/createcarouselitem/createcarouselitem.component';
import { CreatedessertComponent } from './menu-dashboard/cruds/dessert-crud/createdessert/createdessert.component';
import { CreatedrinkComponent } from './menu-dashboard/cruds/drink-crud/createdrink/createdrink.component';
import { CreateregularComponent } from './menu-dashboard/cruds/regular-burger-crud/createregular/createregular.component';
import { CreatetemporaryComponent } from './menu-dashboard/cruds/temporary-burger-crud/createtemporary/createtemporary.component';
import { CreatesnackComponent } from './menu-dashboard/cruds/snack-crud/createsnack/createsnack.component';
import { UpdatecarouselitemComponent } from './carousel-crud/updatecarouselitem/updatecarouselitem.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard],
		canActivateChild: [AuthGuard],
		children: [
			{
				path: '',
				redirectTo: 'menu/regular-burger-crud',
				pathMatch: 'full',
			},
			{ path: 'carousel-crud', component: CarouselCrudComponent },
			{
				path: 'menu',
				component: MenuDashboardComponent,
				children: [
					{
						path: '',
						redirectTo: 'regular-burger-crud',
						pathMatch: 'full',
					},
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
			{
				path: 'create-carousel-item',
				component: CreatecarouselitemComponent,
			},
			{ path: 'create-dessert', component: CreatedessertComponent },
			{ path: 'create-drink', component: CreatedrinkComponent },
			{ path: 'create-regular', component: CreateregularComponent },
			{ path: 'create-temporary', component: CreatetemporaryComponent },
			{ path: 'create-snack', component: CreatesnackComponent },
			{
				path: 'update-carousel-item/:id',
				component: UpdatecarouselitemComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardCrudRoutingModule {}
