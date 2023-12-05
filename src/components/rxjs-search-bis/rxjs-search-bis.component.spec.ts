import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSearchBisComponent } from './rxjs-search-bis.component';

describe('RxjsSearchBisComponent', () => {
  let component: RxjsSearchBisComponent;
  let fixture: ComponentFixture<RxjsSearchBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsSearchBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsSearchBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
