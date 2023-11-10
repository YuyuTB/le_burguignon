import { Component } from '@angular/core';

@Component({
	selector: 'app-temporary-burger-crud',
	templateUrl: './temporary-burger-crud.component.html',
	styleUrls: ['./temporary-burger-crud.component.scss'],
})
export class TemporaryBurgerCrudComponent {
	items = [
		{ id: 1, name: 'Burg 1', desc: 'Burg', isActive: true, isAlterable: true },
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
