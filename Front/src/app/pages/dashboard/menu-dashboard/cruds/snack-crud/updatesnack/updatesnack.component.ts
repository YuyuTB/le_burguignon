import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackService } from 'src/services/snack.service';

@Component({
	selector: 'app-updatesnack',
	templateUrl: './updatesnack.component.html',
	styleUrls: ['./updatesnack.component.scss'],
})
export class UpdatesnackComponent {
	itemId!: number;
	item!: any;
	itemForm!: FormGroup;
	imgUrl!: any;
	selectedFile!: File;
	imagePreviewUrl: string | ArrayBuffer | null = null;

	constructor(
		private fb: FormBuilder,
		private service: SnackService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.itemForm = this.fb.group({
			selectedImage: [null],
			description: ['', Validators.required],
			name: ['', Validators.required],
		});
	}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.itemId = +params['id'];
			this.getItemDetails();
		});
	}

	getItemDetails() {
		this.service.getItemById(this.itemId).subscribe(
			(data) => {
				this.item = data;
				this.imgUrl = this.item.imgUrl;
				this.itemForm.patchValue({
					description: this.item.description,
					selectedImage: null,
					name: this.item.name,
				});
			},
			(error) => {
				console.error(error);
			}
		);
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
				.updateItemWithImage(this.itemId, formData, this.selectedFile)
				.subscribe(
					(response) => {
						console.log('Item updated successfully:', response);
						this.itemForm.reset();
						this.router.navigate(['/dashboard/menu/snack-crud']);
					},
					(error) => {
						console.error('Error updating item with image:', error);
					}
				);
		} else {
			// Si aucun nouveau fichier n'est sélectionné, envoyez les données mises à jour au service sans télécharger de fichier
			this.service.updateItem(this.itemId, formData).subscribe(
				(response) => {
					console.log('Item updated successfully:', response);
					this.itemForm.reset();
					this.router.navigate(['/dashboard/menu/snack-crud']);
				},
				(error) => {
					console.error('Error updating item:', error);
				}
			);
		}
	}
}
