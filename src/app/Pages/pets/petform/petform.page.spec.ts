import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetformPage } from './petform.page';

describe('PetformPage', () => {
  let component: PetformPage;
  let fixture: ComponentFixture<PetformPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
