import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExerciceComponent } from './reactive-form-exercice.component';

describe('ReactiveFormExerciceComponent', () => {
  let component: ReactiveFormExerciceComponent;
  let fixture: ComponentFixture<ReactiveFormExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReactiveFormExerciceComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
