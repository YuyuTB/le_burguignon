import { Component } from '@angular/core';
import { TemporaryService } from 'src/services/temporary.service';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
	constructor(public service: TemporaryService) {}
	temporary_items: any[] = [];
	ngOnInit(): void {
		this.service.getAllItems().subscribe(
			(data) => {
				this.temporary_items = data;
			},
			(error) => {
				console.error('Erreur lors de la récupération des éléments.', error);
			}
		);
	}
}
