import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuratPage } from './surat.page';

describe('SuratPage', () => {
  let component: SuratPage;
  let fixture: ComponentFixture<SuratPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
