import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyTabsComponent } from './fancy-tabs.component';

describe('FancyTabsComponent', () => {
  let component: FancyTabsComponent;
  let fixture: ComponentFixture<FancyTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FancyTabsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(FancyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
