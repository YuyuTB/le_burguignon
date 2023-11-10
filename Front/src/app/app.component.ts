import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Le Burguignon';
	showHeader: boolean = true;
	showFooter: boolean = true;

	constructor(private router: Router) {
		router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.showHeader =
					event.url == '/menu' ||
					event.url == '/contact' ||
					event.url == '/le_burguignon' ||
					event.url == '/home';
				this.showFooter =
					event.url == '/menu' ||
					event.url == '/contact' ||
					event.url == '/le_burguignon' ||
					event.url == '/home';
			}
		});
	}
}
