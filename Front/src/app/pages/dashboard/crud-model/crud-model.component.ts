import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-crud',
	templateUrl: './crud-model.component.html',
	styleUrls: ['./crud-model.component.scss'],
})
export class CrudModelComponent {
	@Input() data: any[] = [];
	@Output() itemSelected = new EventEmitter<any>();
	@Output() itemDeleted = new EventEmitter<number>();

	showModify: boolean = true;
	showIsActive: boolean = true;

	constructor(private router: Router) {
		router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.showModify = event.url !== '/';
				this.showIsActive = event.url !== '/';
			}
		});
	}

	selectedItem: any;

	selectItem(item: any) {
		this.selectedItem = item;
		this.itemSelected.emit(item);
	}
	modifyItem(item: any) {
		console.log('modifying item');
	}
	deleteItem(index: number) {
		this.itemDeleted.emit(index);
	}
}
