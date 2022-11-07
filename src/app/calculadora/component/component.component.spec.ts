import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponent } from './component.component';

import { CalculadoraService } from '../services';

describe('ComponentComponent', () => {
  let component: ComponentComponent;
  let fixture: ComponentFixture<ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentComponent ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
