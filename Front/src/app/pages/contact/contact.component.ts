import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/services/contact.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	itemForm!: FormGroup;
	message!: string;

	constructor(
		private formBuilder: FormBuilder,
		private service: ContactService
	) {
		this.itemForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			message: ['', Validators.required],
		});
	}

	onSubmit(): void {
		const formData = this.itemForm.value;

		this.service.createItem(formData).subscribe(
			(response) => {
				console.log('Item updated successfully:', response);
				this.itemForm.reset();
				this.message = 'Message envoyé !';
			},
			(error) => {
				console.error('Error updating item:', error);

				if (error.status === 400) {
					// Le statut est 400, tu peux traiter la réponse ici
					console.log('Status 400 - Bad Request:', error);
					this.message = 'Merci de remplir tous les champs';
				} else {
					// Le statut n'est pas 400, tu peux gérer d'autres erreurs ici
					this.message =
						"Une erreur s'est produite lors de l'envoi du message.";
				}
			}
		);
	}
}
