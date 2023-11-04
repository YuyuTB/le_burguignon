import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	contactForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.contactForm = this.formBuilder.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
		});
	}

	onSubmit() {
		if (this.contactForm.valid) {
			// Vous pouvez soumettre les données ici
		}
	}
}
