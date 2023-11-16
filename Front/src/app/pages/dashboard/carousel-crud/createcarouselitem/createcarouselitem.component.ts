import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-createcarouselitem',
	templateUrl: './createcarouselitem.component.html',
	styleUrls: ['./createcarouselitem.component.scss'],
})
export class CreatecarouselitemComponent {
	uploadForm: FormGroup;

	get selectedImage() {
		return this.uploadForm.get('selectedImage');
	}

	newItem: any = {};

	constructor(
		private http: HttpClient,
		private fb: FormBuilder,
		private el: ElementRef
	) {
		this.uploadForm = this.fb.group({
			selectedImage: [null, Validators.required],
			description: ['', Validators.required],
			// Ajoutez d'autres champs au besoin
		});
	}

	onFileSelected(event: any): void {
		try {
			const fileInput = event.target as HTMLInputElement;

			// Vérifier que l'élément et sa propriété files sont présents
			if (fileInput && fileInput.files) {
				const file: File | null = fileInput.files[0];

				if (file) {
					this.uploadForm.patchValue({
						selectedImage: file,
					});
				}
			}
		} catch (error) {
			console.error(
				'Une erreur est survenue lors de la sélection du fichier :',
				error
			);
		}
	}

	uploadImageAndCreateItem(): void {
		if (this.selectedImage !== undefined) {
			console.log('Image sélectionnée:', this.selectedImage?.value.name);

			// Ajoutez ici la logique pour créer un nouvel élément avec l'image
			this.newItem.image = this.selectedImage; // Assurez-vous que le modèle côté serveur accepte une propriété 'image'

			// Ajoutez ici la logique pour télécharger l'image
			this.uploadImage(this.newItem);
		} else {
			console.error('Aucune image sélectionnée.');
		}
	}

	uploadImage(newItem: any): void {
		const formData = new FormData();
		formData.append('image', newItem.image);

		// Remplacez l'URL par l'URL de votre serveur
		const uploadUrl = 'http://localhost:3000/api/carousel/upload';

		this.http.post(uploadUrl, formData).subscribe(
			(response) => {
				console.log('Réponse du serveur :', response);
				// Ajoutez ici la logique pour traiter la réponse du serveur
			},
			(error) => {
				console.error('Erreur lors de la requête :', error);
				// Ajoutez ici la logique pour gérer l'erreur
			}
		);
	}
}
