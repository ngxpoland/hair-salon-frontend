import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditOrNewComponent } from './client-edit-or-new.component';

describe('ClientNewComponent', () => {
  let component: ClientEditOrNewComponent;
  let fixture: ComponentFixture<ClientEditOrNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientEditOrNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientEditOrNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
