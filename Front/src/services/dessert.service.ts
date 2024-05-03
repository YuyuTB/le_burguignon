import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
	providedIn: 'root',
})
export class DessertService {
	private apiUrl = 'https://api.burguignon.fr/api/dessert';
	constructor(private http: HttpClient, private router: Router) {}
	private itemIdSource = new Subject<number>();
	itemId$ = this.itemIdSource.asObservable();

	// CREATE
	createItem(item: any): Observable<any> {
		return this.http.post(`${this.apiUrl}`, item);
	}

	// READ
	getAllItems(): Observable<any[]> {
		return this.http.get<any[]>(`${this.apiUrl}`);
	}

	getItemById(itemId: number): Observable<any> {
		return this.http.get(`${this.apiUrl}/${itemId}`);
	}

	// UPDATE
	updateItem(itemId: number, data: any): Observable<any> {
		return this.http.put(`${this.apiUrl}/upload/${itemId}`, data);
	}

	goToUpdatePage(itemId: number): void {
		this.router.navigate(['/update-dessert', itemId]);
	}

	sendItemId(itemId: number) {
		this.itemIdSource.next(itemId);
	}

	// DELETE
	deleteItem(itemId: number): Observable<any> {
		return this.http.delete(`${this.apiUrl}/${itemId}`);
	}

	createItemWithImage(formData: any, file: File): Observable<any> {
		const uploadData = new FormData();
		uploadData.append('selectedImage', file);
		uploadData.append('description', formData.description);
		uploadData.append('name', formData.name);

		return this.http.post(`${this.apiUrl}/upload`, uploadData);
	}
	updateItemWithImage(
		itemId: number,
		formData: any,
		file: File
	): Observable<any> {
		const uploadData = new FormData();
		uploadData.append('selectedImage', file, file.name);
		uploadData.append('description', formData.description);
		uploadData.append('name', formData.name);

		return this.http.put(`${this.apiUrl}/upload/${itemId}`, uploadData);
	}
}
