import { Component } from '@angular/core';
import { faPhone, faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	faPhone = faPhone;
	faEnvelope = faEnvelope;
	faInstagram = faInstagram;
	faSnapchat = faSnapchat;
	faGear = faGear;
	mail = 'contact.le.burguignon@gmail.com';
}
