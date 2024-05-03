import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DessertService } from 'src/services/dessert.service';

@Component({
	selector: 'app-dessert-crud',
	templateUrl: './dessert-crud.component.html',
	styleUrls: ['./dessert-crud.component.scss'],
})
export class DessertCrudComponent {
	items: any[] = [];

	constructor(private router: Router, private service: DessertService) {}

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
		this.service.deleteItem(itemId).subscribe(
			(response) => {
				if (response.message === 'Deleted object') {
					console.log('Item deleted successfully.');
					this.loadItems();
				} else {
					console.warn(
						'Unexpected response after item deletion:',
						response
					);
				}
			},
			(error) => {
				console.error('Error deleting item:', error);
			}
		);
	}

	goToCreatePage(): void {
		this.router.navigate(['/dashboard/create-dessert']);
	}
	goToUpdatePage(id: number): void {
		this.service.getItemById(id).subscribe((data) => {
			console.log('ID avant la navigation :', id);
			this.router.navigate(['dashboard/update-dessert', id]);
		});
	}
}
