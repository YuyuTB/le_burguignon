import { Component } from '@angular/core';

@Component({
	selector: 'app-regular-burger-crud',
	templateUrl: './regular-burger-crud.component.html',
	styleUrls: ['./regular-burger-crud.component.scss'],
})
export class RegularBurgerCrudComponent {
	items = [{ id: 1, name: 'Burger', desc: 'Burger', isAlterable: true }];
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
