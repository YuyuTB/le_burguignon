import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegularService } from 'src/services/regular.service';
@Component({
	selector: 'app-createregular',
	templateUrl: './createregular.component.html',
	styleUrls: ['./createregular.component.scss'],
})
export class CreateregularComponent {
	itemForm!: FormGroup;
	selectedFile!: File;
	imagePreviewUrl: string | ArrayBuffer | null = null;

	constructor(
		private fb: FormBuilder,
		private service: RegularService,
		private router: Router
	) {
		this.itemForm = this.fb.group({
			selectedImage: ['', Validators.required],
			description: ['', Validators.required],
			name: ['', Validators.required],
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
						this.router.navigate([
							'/dashboard/menu/regular-burger-crud',
						]);
					},
					(error) => {
						console.error('Error updating item with image:', error);
					}
				);
		}
	}
}
