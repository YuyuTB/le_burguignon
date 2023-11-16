import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CarouselItemService {
	private apiUrl = 'http://localhost:3000/api/carousel';

	constructor(private http: HttpClient) {}

	// CREATE
	createItem(item: any): Observable<any> {
		return this.http.post(`${this.apiUrl}/items`, item);
	}

	// READ
	getAllItems(): Observable<any[]> {
		return this.http.get<any[]>(`${this.apiUrl}/items`);
	}

	// UPDATE
	updateItem(itemId: number, updatedItem: any): Observable<any> {
		return this.http.put(`${this.apiUrl}/items/${itemId}`, updatedItem);
	}

	// DELETE
	deleteItem(itemId: number): Observable<any> {
		return this.http.delete(`${this.apiUrl}/items/${itemId}`);
	}
}
