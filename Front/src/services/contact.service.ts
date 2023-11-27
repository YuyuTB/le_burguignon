import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ContactService {
	private apiUrl = 'http://localhost:3000/api/contact';
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

	sendItemId(itemId: number) {
		this.itemIdSource.next(itemId);
	}

	// DELETE
	deleteItem(itemId: number): Observable<any> {
		return this.http.delete(`${this.apiUrl}/${itemId}`);
	}
}
