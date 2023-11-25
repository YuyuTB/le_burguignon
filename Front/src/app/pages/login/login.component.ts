import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	username: string = '';
	password: string = '';
	wrong: boolean = false;

	constructor(private authService: AuthService, private router: Router) {}

	onSubmit(): void {
		this.authService.login(this.username, this.password).subscribe(
			() => {
				console.log('Connexion réussie !'); // Gère le succès de la connexion (redirection, message, etc.)
				this.router.navigate(['/dashboard']);
			},
			(error) => {
				console.error('Erreur de connexion :', error); // Gère les erreurs de connexion
				this.wrong = true;
			}
		);
	}
}
