import { AfterContentInit, AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-new-or-edit',
  templateUrl: './client-edit-or-new.component.html',
  styleUrls: ['./client-edit-or-new.component.scss']
})
export class ClientEditOrNewComponent implements OnInit, AfterViewInit, AfterContentInit {
  client: Client = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    phone: ''
  };

  clients: Client[] = [];
  unsaved: boolean = false;
  currentElement: number = 1;
  allSelectedElement: number = 1;

  formTitle = 'Nowy klient';

  formGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
  });

  constructor(
    public dialogRef: MatDialogRef<ClientEditOrNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client[],
  ) { }

  ngAfterContentInit(): void {
    console.log("data: ", this.data);
    if (this.data) {
      this.clients = JSON.parse(JSON.stringify(this.data));
      this.allSelectedElement = this.clients.length;
      this.formTitle = 'Edycja danych klienta';
      this.loadForm(1);
    }
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    
  }

  save() {
    if (!this.formGroup.dirty) {
      return;
    }
    this.unsaved = true;
    console.log(this.formGroup);
    this.client.id = this.formGroup.get('id')?.value;
    this.client.name = this.formGroup.get('name')?.value;
    this.client.surname = this.formGroup.get('surname')?.value;
    this.client.email = this.formGroup.get('email')?.value;
    this.client.phone = this.formGroup.get('phone')?.value;
    this.clients[this.currentElement-1] = this.client;
  }

  loadForm(currentElement: number) {
    this.client = this.clients[currentElement-1];
    this.formGroup.patchValue(
      {
        id: this.client.id,
        name: this.client.name,
        surname: this.client.surname,
        email: this.client.email,
        phone: this.client.phone,
      }
    )
  }

  cancel() {
    this.dialogRef.close();
  }

  handleClickNext() {
    this.save();
    if (this.currentElement < this.allSelectedElement) {
      this.currentElement++;
      this.loadForm(this.currentElement);
    }
  }

  handleClickPrev() {
    this.save();
    if (this.currentElement > 1) {
      this.currentElement--;
      this.loadForm(this.currentElement);
    }
  }

}
