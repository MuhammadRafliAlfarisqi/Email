import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeluarPage } from './keluar.page';

describe('KeluarPage', () => {
  let component: KeluarPage;
  let fixture: ComponentFixture<KeluarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KeluarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
