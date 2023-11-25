import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselItemService } from 'src/services/carouselitem.service';

@Component({
	selector: 'app-updatecarouselitem',
	templateUrl: './updatecarouselitem.component.html',
	styleUrls: ['./updatecarouselitem.component.scss'],
})
export class UpdatecarouselitemComponent {
	itemId!: number;
	item!: any;
	itemForm!: FormGroup;
	imgUrl!: any;
	selectedFile!: File;
	imagePreviewUrl: string | ArrayBuffer | null = null;

	constructor(
		private fb: FormBuilder,
		private service: CarouselItemService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.itemForm = this.fb.group({
			selectedImage: ['', Validators.required],
			description: ['', Validators.required],
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
						this.router.navigate(['/dashboard/carousel-crud']);
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
				},
				(error) => {
					console.error('Error updating item:', error);
				}
			);
		}
	}
}
