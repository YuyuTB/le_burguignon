import { Component } from '@angular/core';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-menu-dashboard',
	templateUrl: './menu-dashboard.component.html',
	styleUrls: ['./menu-dashboard.component.scss'],
})
export class MenuDashboardComponent {
	faSquareCaretDown = faSquareCaretDown;
	isOpen = false;
	openHeader(): void {
		if (this.isOpen) {
			this.isOpen = false;
		} else {
			this.isOpen = true;
		}
	}
}
