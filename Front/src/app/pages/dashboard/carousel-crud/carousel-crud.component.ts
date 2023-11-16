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
		this.service.getAllItems().subscribe((data) => {
			this.items = data;
		});
	}

	updateItem(itemId: number, updatedItem: any) {
		this.service.updateItem(itemId, updatedItem).subscribe(() => {
			this.loadItems();
		});
	}

	deleteItem(itemId: number) {
		this.service.deleteItem(itemId).subscribe(() => {
			this.loadItems();
		});
	}
	goToCreatePage(): void {
		this.router.navigate(['/dashboard/create-carousel-item']);
	}
}
