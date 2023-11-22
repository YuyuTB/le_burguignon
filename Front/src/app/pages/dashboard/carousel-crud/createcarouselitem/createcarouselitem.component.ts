import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarouselItemService } from 'src/services/carouselitem.service';

@Component({
	selector: 'app-createcarouselitem',
	templateUrl: './createcarouselitem.component.html',
	styleUrls: ['./createcarouselitem.component.scss'],
})
export class CreatecarouselitemComponent {
	itemForm!: FormGroup;
	selectedFile!: File;

	constructor(private fb: FormBuilder, private service: CarouselItemService) {
		this.itemForm = this.fb.group({
			selectedImage: [''],
			description: [''],
		});
	}

	onFileSelected(event: any): void {
		const file = event.target.files[0];
		this.selectedFile = file;
	}
	onSubmit(): void {
		const formData = this.itemForm.value;

		formData.imgUrl = this.selectedFile
			? URL.createObjectURL(this.selectedFile)
			: null;
		formData.description = formData.description || null;
		// Send both description and imgUrl to the service
		if (this.selectedFile) {
			this.service
				.createItemWithImage(formData, this.selectedFile)
				.subscribe(
					(response) => {
						console.log('Item created successfully:', response);
						// Reset the form or perform any other necessary actions
						this.itemForm.reset();
					},
					(error) => {
						console.error('Error creating item:', error);
					}
				);
		}
	}
}
