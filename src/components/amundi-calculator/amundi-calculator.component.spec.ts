import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmundiCalculatorComponent } from './amundi-calculator.component';

describe('AmundiCalculatorComponent', () => {
  let component: AmundiCalculatorComponent;
  let fixture: ComponentFixture<AmundiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmundiCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmundiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
