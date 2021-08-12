import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHeroesComponent } from './detalles-heroes.component';

describe('DetallesHeroesComponent', () => {
  let component: DetallesHeroesComponent;
  let fixture: ComponentFixture<DetallesHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
