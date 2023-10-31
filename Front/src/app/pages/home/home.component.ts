
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faStar = faStar;
}
