import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsHigherOrderMappingOperatorsComponent } from './rxjs-higher-order-mapping-operators.component';

describe('RxjsHigherOrderMappingOperatorsComponent', () => {
  let component: RxjsHigherOrderMappingOperatorsComponent;
  let fixture: ComponentFixture<RxjsHigherOrderMappingOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsHigherOrderMappingOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsHigherOrderMappingOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
