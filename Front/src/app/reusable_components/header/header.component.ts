import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	faBars = faBars;
	isSmall: boolean = false;
	isMobile: boolean = false;
	isBurgerOpen: boolean = false;
	ngOnInit() {
		// Example: You might use a service to get information about the device
		this.isSmall = window.innerWidth < 1024;
		this.isMobile = window.innerWidth < 685;

		// Listen for window resize events to update isMobile dynamically
		window.addEventListener('resize', () => {
			this.isSmall = window.innerWidth < 1024;
		});
		window.addEventListener('resize', () => {
			this.isMobile = window.innerWidth < 685;
		});
	}
	activateBurger(): void {
		if (this.isBurgerOpen) {
			this.isBurgerOpen = false;
		} else {
			this.isBurgerOpen = true;
		}
	}
	closeBurger(): void {
		this.isBurgerOpen = false;
	}
	@HostListener('window:resize', ['$event'])
	onResize(event: Event): void {
		this.isBurgerOpen = false;
	}
}
