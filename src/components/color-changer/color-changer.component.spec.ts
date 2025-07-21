import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorChangerComponent } from './color-changer.component';

describe('ColorChangerComponent', () => {
  let component: ColorChangerComponent;
  let fixture: ComponentFixture<ColorChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ColorChangerComponent]
})
      .compileComponents();

    fixture = TestBed.createComponent(ColorChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component colorChanger', () => {
    expect(component).toBeTruthy();
  });

  it('sets the background property to green initially', () => {
    expect(component.bgColor).toBe('green');
  });

  it('set the background property to red when invocking the method changeBackgroundColor', () => {
    component.changeBackgroundColor();
    expect(component.bgColor).toBe('#FF0000');
  });

  it('sets the background property to red when clicking the button', () => {
    const btn = fixture.debugElement.query(By.css('#btn'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.bgColor).toBe('#FF0000');
  });

  it('invokes the method changeBackgroundColor when clicking the button', () => {
    const componentSpy = spyOn(component, 'changeBackgroundColor');
    const btn = fixture.debugElement.query(By.css('#btn'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(componentSpy).toHaveBeenCalled();
  });

});
