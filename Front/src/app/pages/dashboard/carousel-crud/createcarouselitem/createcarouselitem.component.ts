import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CarouselItemService } from 'src/services/carouselitem.service';

@Component({
	selector: 'app-createcarouselitem',
	templateUrl: './createcarouselitem.component.html',
	styleUrls: ['./createcarouselitem.component.scss'],
})
export class CreatecarouselitemComponent {
	itemForm!: FormGroup;
	selectedFile!: File;
	imagePreviewUrl: string | ArrayBuffer | null = null;

	constructor(
		private fb: FormBuilder,
		private service: CarouselItemService,
		private router: Router
	) {
		this.itemForm = this.fb.group({
			selectedImage: ['', Validators.required],
			description: ['', Validators.required],
		});
	}

	onFileSelected(event: any): void {
		const file = event.target.files[0];
		this.selectedFile = file;
		this.previewImage();
	}

	previewImage(): void {
		if (this.selectedFile) {
			const reader = new FileReader();

			reader.onload = (e: any) => {
				// Affecte l'URL de la preview à une propriété dans le composant
				this.imagePreviewUrl = e.target.result;
			};

			// Lit le contenu du fichier en tant que Data URL
			reader.readAsDataURL(this.selectedFile);
		}
	}
	onSubmit(): void {
		const formData = this.itemForm.value;

		if (this.selectedFile) {
			this.service
				.createItemWithImage(formData, this.selectedFile)
				.subscribe(
					(response) => {
						console.log('Item updated successfully:', response);
						this.itemForm.reset();
						this.router.navigate(['/dashboard/carousel-crud']);
					},
					(error) => {
						console.error('Error updating item with image:', error);
					}
				);
		}
	}
}
