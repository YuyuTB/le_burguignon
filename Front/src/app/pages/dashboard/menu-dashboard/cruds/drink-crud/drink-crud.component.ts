import { Component } from '@angular/core';

@Component({
	selector: 'app-drink-crud',
	templateUrl: './drink-crud.component.html',
	styleUrls: ['./drink-crud.component.scss'],
})
export class DrinkCrudComponent {
	items = [
		{
			id: 1,
			name: 'Drink 1',
			desc: 'Drink',
			isActive: true,
			isAlterable: true,
		},
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
