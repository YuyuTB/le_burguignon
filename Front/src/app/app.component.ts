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
				const url = event.urlAfterRedirects || event.url;
           		this.showHeader = url.startsWith('/dashboard');
            	this.showFooter = url.startsWith('/dashboard');
			}
		});
	}
}
