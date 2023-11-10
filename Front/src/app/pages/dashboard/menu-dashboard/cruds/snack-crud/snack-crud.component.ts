import { Component } from '@angular/core';

@Component({
	selector: 'app-snack-crud',
	templateUrl: './snack-crud.component.html',
	styleUrls: ['./snack-crud.component.scss'],
})
export class SnackCrudComponent {
	items = [{ id: 1, name: 'Snack', desc: 'Snack', isAlterable: true }];
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
