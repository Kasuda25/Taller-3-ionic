import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetlistPage } from './petlist.page';

describe('PetlistPage', () => {
  let component: PetlistPage;
  let fixture: ComponentFixture<PetlistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
