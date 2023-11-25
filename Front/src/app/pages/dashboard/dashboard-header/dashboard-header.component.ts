import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
	selector: 'app-dashboard-header',
	templateUrl: './dashboard-header.component.html',
	styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
	constructor(private authService: AuthService, private router: Router) {}

	logout(): void {
		this.authService.logout();
		this.router.navigate(['/login']);
	}
}
