import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsScanOperatorComponent } from './rxjs-scan-operator.component';

describe('RxjsScanOperatorComponent', () => {
  let component: RxjsScanOperatorComponent;
  let fixture: ComponentFixture<RxjsScanOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RxjsScanOperatorComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(RxjsScanOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
