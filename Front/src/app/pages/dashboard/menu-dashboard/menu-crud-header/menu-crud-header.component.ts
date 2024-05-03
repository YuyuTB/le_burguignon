import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-menu-crud-header',
	templateUrl: './menu-crud-header.component.html',
	styleUrls: ['./menu-crud-header.component.scss'],
})
export class MenuCrudHeaderComponent {
	@Output() buttonClick = new EventEmitter<void>();
	closeMenu() {
		this.buttonClick.emit();
	}
}
