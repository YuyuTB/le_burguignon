import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselItemService } from 'src/services/carouselitem.service';

@Component({
	selector: 'app-carousel-crud',
	templateUrl: './carousel-crud.component.html',
	styleUrls: ['./carousel-crud.component.scss'],
})
export class CarouselCrudComponent implements OnInit {
	items: any[] = [];

	constructor(private router: Router, private service: CarouselItemService) {}

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
	deleteItem(itemId: number) {
		this.service.deleteItem(itemId).subscribe(() => {
			this.loadItems();
		});
	}
	goToCreatePage(): void {
		this.router.navigate(['/dashboard/create-carousel-item']);
	}
	goToUpdatePage(id: number): void {
		// if (this.items.length > 0) {
		// 	const item = this.items[id];
		// 	console.log(
		// 		"Valeur de l'ID du premier élément :",
		// 		item.CarouselItem_id
		// 	);
		// 	if (item.CarouselItem_id !== undefined) {
		// 		const itemId = item.CarouselItem_id;
		// 		this.service.sendItemId(itemId);
		// 		this.service.goToUpdatePage(itemId);
		// 	} else {
		// 		console.error("La propriété 'id' de l'élément est undefined.");
		// 	}
		// } else {
		// 	console.error("La liste d'éléments est vide.");
		// }
		this.service.getItemById(id).subscribe((data) => {
			console.log('ID avant la navigation :', id);
			this.router.navigate(['dashboard/update-carousel-item', id]);
		});
	}
}
