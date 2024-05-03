import { Component } from '@angular/core';
import { DessertService } from 'src/services/dessert.service';
import { DrinkService } from 'src/services/drink.service';
import { RegularService } from 'src/services/regular.service';
import { SnackService } from 'src/services/snack.service';
import { TemporaryService } from 'src/services/temporary.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	constructor(
		private temporaryService: TemporaryService,
		private regularService: RegularService,
		private snackService: SnackService,
		private drinkService: DrinkService,
		private dessertService: DessertService
	) {}
	temporary_items: any[] = [];
	regular_items: any[] = [];
	snack_items: any[] = [];
	drink_items: any[] = [];
	dessert_items: any[] = [];
	overlay: boolean = false;
	overlay_data: any = {};

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
		this.regularService.getAllItems().subscribe(
			(data) => {
				this.regular_items = data;
			},
			(error) => {
				console.error(
					'Erreur lors de la récupération des éléments.',
					error
				);
			}
		);
		this.snackService.getAllItems().subscribe(
			(data) => {
				this.snack_items = data;
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

	openOverlayRegular(id: number) {
		this.regularService.getItemById(id).subscribe((data) => {
			this.overlay = true;
			this.overlay_data = data;
			console.log(this.overlay_data);
		});
	}
	openOverlaySnack(id: number) {
		this.snackService.getItemById(id).subscribe((data) => {
			this.overlay = true;
			this.overlay_data = data;
			console.log(this.overlay_data);
		});
	}
	closeOverlay() {
		this.overlay = false;
	}
}
