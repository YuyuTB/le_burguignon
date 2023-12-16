import { Component, OnInit } from '@angular/core';
import { CarouselItemService } from 'src/services/carouselitem.service';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
	items: any[] = [];

	constructor(private service: CarouselItemService) {}

	ngOnInit(): void {
		this.loadItems();
	}

	loadItems() {
		this.service.getAllItems().subscribe(
			(data) => {
				this.items = data;
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
