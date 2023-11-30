import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOfComponent } from './rxjs-of.component';

describe('RxjsOfComponent', () => {
  let component: RxjsOfComponent;
  let fixture: ComponentFixture<RxjsOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
