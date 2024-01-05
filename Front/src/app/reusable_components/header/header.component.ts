import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	isMobile: boolean = false;

	ngOnInit() {
		// Example: You might use a service to get information about the device
		this.isMobile = window.innerWidth < 900;

		// Listen for window resize events to update isMobile dynamically
		window.addEventListener('resize', () => {
			this.isMobile = window.innerWidth < 900;
		});
	}
}
