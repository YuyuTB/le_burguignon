import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselItemService } from 'src/services/carouselitem.service';

@Component({
	selector: 'app-createcarouselitem',
	templateUrl: './createcarouselitem.component.html',
	styleUrls: ['./createcarouselitem.component.scss'],
})
export class CreatecarouselitemComponent {
	newCarouselItem: any = {};
	selectedFile: File | null = null;

	constructor(
		private router: Router,
		private carouselItemService: CarouselItemService
	) {}

	createCarouselItem(): void {
		// Vérifiez si un fichier a été sélectionné avant de soumettre le formulaire
		if (this.selectedFile) {
			this.uploadImageAndCreateItem();
		} else {
			console.error('Aucun fichier sélectionné');
		}
	}

	onFileSelected(event: any): void {
		this.selectedFile = event.target.files[0] as File;
	}

	uploadImageAndCreateItem(): void {
		if (this.selectedFile) {
			const formData = new FormData();
			formData.append('image', this.selectedFile);

			this.carouselItemService.uploadImage(formData).subscribe(
				(response) => {
					this.createCarouselItem();
				},
				(error) => {
					console.error(
						"Erreur lors du téléchargement de l'image",
						error
					);
				}
			);
		} else {
			console.error('Aucun fichier sélectionné');
		}
	}
}
