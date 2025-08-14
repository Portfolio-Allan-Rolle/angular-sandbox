import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReadme } from './component-readme';

describe('ComponentReadme', () => {
  let component: ComponentReadme;
  let fixture: ComponentFixture<ComponentReadme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentReadme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentReadme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
