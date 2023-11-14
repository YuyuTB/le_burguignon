import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CarouselItemService {
	private baseUrl = 'http://localhost:3000/api/carouselitems';

	constructor(private http: HttpClient) {}

	getAllCarouselItems(): Observable<any> {
		return this.http.get(this.baseUrl);
	}

	createCarouselItem(carouselItemData: any): Observable<any> {
		return this.http.post(this.baseUrl, carouselItemData);
	}

	updateCarouselItem(
		carouselItemId: number,
		carouselItemData: any
	): Observable<any> {
		return this.http.put(
			`${this.baseUrl}/${carouselItemId}`,
			carouselItemData
		);
	}

	deleteCarouselItem(carouselItemId: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${carouselItemId}`);
	}

	uploadImage(formData: FormData): Observable<any> {
		return this.http.post(`${this.baseUrl}/upload`, formData);
	}
}
