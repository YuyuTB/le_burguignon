import { Component } from '@angular/core';
import { ContactService } from 'src/services/contact.service';

@Component({
	selector: 'app-contact-crud',
	templateUrl: './contact-crud.component.html',
	styleUrls: ['./contact-crud.component.scss'],
})
export class ContactCrudComponent {
	items: any[] = [];
	constructor(private service: ContactService) {}
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
}
