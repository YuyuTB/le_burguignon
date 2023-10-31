import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-order-button',
	templateUrl: './order-button.component.html',
	styleUrls: ['./order-button.component.scss'],
})
export class OrderButtonComponent {
	constructor(private router: Router) {}

	navigateToSection() {
		this.router.navigate(['/home'], { fragment: 'order' }).then(() => {
			this.scrollToAnchor('order');
		});
	}
	scrollToAnchor(anchor: string) {
		const element = document.getElementById(anchor);
		if (element) {
			element.scrollIntoView();
		}
	}
}
