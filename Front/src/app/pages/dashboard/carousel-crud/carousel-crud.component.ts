import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselItemService } from 'src/services/carouselitem.service';

@Component({
	selector: 'app-carousel-crud',
	templateUrl: './carousel-crud.component.html',
	styleUrls: ['./carousel-crud.component.scss'],
})
export class CarouselCrudComponent implements OnInit {
	carouselItems: any[] = [];

	constructor(
		private router: Router,
		private carouselItemService: CarouselItemService
	) {}

	ngOnInit(): void {
		this.loadCarouselItems();
	}

	loadCarouselItems(): void {
		this.carouselItemService.getAllCarouselItems().subscribe(
			(data) => {
				console.log('Réponse de la requête HTTP', data);
				this.carouselItems = data;
			},
			(error) => {
				console.error(error);
			}
		);
	}

	deleteCarouselItem(carouselItemId: number): void {
		this.carouselItemService.deleteCarouselItem(carouselItemId).subscribe(
			() => {
				this.loadCarouselItems(); // Recharge la liste après suppression
			},
			(error) => {
				console.error(error);
			}
		);
	}
	goToCreatePage(): void {
		this.router.navigate(['/dashboard/create-carousel-item']);
	}
}
