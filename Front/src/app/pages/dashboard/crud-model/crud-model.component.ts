import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-crud',
	templateUrl: './crud-model.component.html',
	styleUrls: ['./crud-model.component.scss'],
})
export class CrudModelComponent {
	@Input() data: any[] = [];
	@Output() itemSelected = new EventEmitter<any>();
	@Output() itemDeleted = new EventEmitter<number>();

	selectedItem: any;

	selectItem(item: any) {
		this.selectedItem = item;
		this.itemSelected.emit(item);
	}

	deleteItem(index: number) {
		this.itemDeleted.emit(index);
	}
}
