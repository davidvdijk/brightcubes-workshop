import { Contact } from './contact.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  selectedContact$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  loadContacts(): Observable<Contact[]> {
    return this.http.get<any>('https://randomuser.me/api/?results=10').pipe(take(1), map(result => {
      return result['results'] as Contact[];
    }));
  }
}
