import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
	selectedFile!: File;

	constructor(
		private fb: FormBuilder,
		private service: CarouselItemService,
		private route: ActivatedRoute
	) {
		this.itemForm = this.fb.group({
			selectedImage: [''],
			description: [''],
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
				// Set the initial values in the form
				this.itemForm.patchValue({
					description: this.item.description,
					selectedImage: null, // Assuming you don't want to display the existing image
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
	}

	onSubmit(): void {
		const formData = this.itemForm.value;

		if (this.selectedFile) {
			// If a new file is selected, update the imgUrl
			formData.imgUrl = URL.createObjectURL(this.selectedFile);
		}

		// Send the updated data to the service
		this.service.updateItem(this.itemId, formData).subscribe(
			(response) => {
				console.log('Item updated successfully:', response);
				// Reset the form or perform any other necessary actions
				this.itemForm.reset();
			},
			(error) => {
				console.error('Error updating item:', error);
			}
		);
	}
}
