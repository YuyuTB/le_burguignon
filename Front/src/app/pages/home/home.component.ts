import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { TemporaryService } from 'src/services/temporary.service';
import { DrinkService } from 'src/services/drink.service';
import { DessertService } from 'src/services/dessert.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	faStar = faStar;
	temporary_items: any[] = [];
	drink_items: any[] = [];
	dessert_items: any[] = [];

	constructor(
		private temporaryService: TemporaryService,
		private drinkService: DrinkService,
		private dessertService: DessertService
	) {}
	ngOnInit(): void {
		this.loadItems();
	}
	loadItems() {
		this.temporaryService.getAllItems().subscribe(
			(data) => {
				this.temporary_items = data;
			},
			(error) => {
				console.error(
					'Erreur lors de la récupération des éléments.',
					error
				);
			}
		);
		this.dessertService.getAllItems().subscribe(
			(data) => {
				this.dessert_items = data;
			},
			(error) => {
				console.error(
					'Erreur lors de la récupération des éléments.',
					error
				);
			}
		);
		this.drinkService.getAllItems().subscribe(
			(data) => {
				this.drink_items = data;
			},
			(error) => {
				console.error(
					'Erreur lors de la récupération des éléments.',
					error
				);
			}
		);
	}
}
