import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptSandboxComponent } from './javascript-sandbox.component';

describe('JavascriptSandboxComponent', () => {
  let component: JavascriptSandboxComponent;
  let fixture: ComponentFixture<JavascriptSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptSandboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
