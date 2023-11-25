import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private jwtHelper: JwtHelperService;
	constructor(private http: HttpClient) {
		this.jwtHelper = new JwtHelperService();
	}
	private apiUrl = 'http://localhost:3000/api';

	// Dans ton service d'authentification
	login(username: string, password: string): Observable<any> {
		return this.http
			.post(this.apiUrl + '/login', { username, password })
			.pipe(
				map((response: any) => {
					// Stocke le token dans le localStorage
					localStorage.setItem('token', response.token);
				})
			);
	}
	isAuthenticated(): boolean {
		return !!localStorage.getItem('token');
	}

	isAdmin(): boolean {
		const token = localStorage.getItem('token');

		// Vérifie si le token est présent et non expiré
		if (token && !this.jwtHelper.isTokenExpired(token)) {
			// Extrayez le rôle de la charge utile du token
			const payload = this.jwtHelper.decodeToken(token);

			// Vérifie si le rôle est 'admin'
			return payload && payload.role === 'admin';
		}

		// Retourne false si le token est absent ou expiré
		return false;
	}
	logout(): void {
		localStorage.removeItem('token');
	}
}
