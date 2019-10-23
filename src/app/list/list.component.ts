import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.contactService.loadContacts().subscribe(contacten => this.contacts = of(contacten));
  }

  onClick(contact: Contact) {
    this.contactService.selectedContact$.next(contact);
    this.router.navigate(['/detail']);
  }
}
