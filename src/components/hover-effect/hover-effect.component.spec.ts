import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HoverEffectComponent } from './hover-effect.component';

describe('HoverEffectComponent', () => {
  let component: HoverEffectComponent;
  let fixture: ComponentFixture<HoverEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoverEffectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HoverEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component hoverEffect', () => {
    expect(component).toBeTruthy();
  });

  it('sets the property isHovered to grey initially', () => {
    expect(component.isHovered).toBe('grey');
  });

  it('sets the property isHovered to black on mouseEnter / coverage', () => {
    component.onMouseEnter();
    expect(component.isHovered).toBe("black")
  });

  it('sets the property isHovered to red on mouseleave / coverage', () => {
    component.onMouseLeave();
    expect(component.isHovered).toBe("red")
  });

  it('invokes the method onMouseEnter on mouseEnter event / ts', () => {
    const componentSpy = spyOn(component, 'onMouseEnter');
    const el = fixture.debugElement.query(By.css('div'));

    const event = new MouseEvent('mouseenter',
      {
        view: window,
        bubbles: true,
        cancelable: true,
        relatedTarget: document
      });

    el.nativeElement.dispatchEvent(event);

    fixture.detectChanges();
    expect(componentSpy).toHaveBeenCalled();
  });

  it('invokes the method onMouseLeave on mouseLeave event / ts', () => {
    const componentSpy = spyOn(component, 'onMouseLeave');
    const el = fixture.debugElement.query(By.css('div'));

    const event = new MouseEvent('mouseleave',
      {
        view: window,
        bubbles: true,
        cancelable: true,
        relatedTarget: document
      });

    el.nativeElement.dispatchEvent(event);

    fixture.detectChanges();
    expect(componentSpy).toHaveBeenCalled();
  });

});
