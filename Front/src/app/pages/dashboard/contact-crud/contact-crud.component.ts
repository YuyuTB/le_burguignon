import { Component } from '@angular/core';

@Component({
	selector: 'app-contact-crud',
	templateUrl: './contact-crud.component.html',
	styleUrls: ['./contact-crud.component.scss'],
})
export class ContactCrudComponent {
	items = [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		// ... d'autres éléments
	];
	onItemSelected(item: any) {
		// Logique lorsque l'élément est sélectionné
		console.log('Element sélectionné :', item);
	}

	onItemDeleted(index: number) {
		// Logique lorsque l'élément est supprimé
		console.log("Element supprimé à l'index :", index);
		this.items.splice(index, 1); // Supprime l'élément du tableau
	}
}
