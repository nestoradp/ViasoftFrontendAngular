import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaAfectadaComponent } from './provincia-afectada.component';

describe('ProvinciaAfectadaComponent', () => {
  let component: ProvinciaAfectadaComponent;
  let fixture: ComponentFixture<ProvinciaAfectadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaAfectadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaAfectadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
