import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcaoInputComponent } from './icao-input.component';

describe('IcaoInputComponent', () => {
  let component: IcaoInputComponent;
  let fixture: ComponentFixture<IcaoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcaoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcaoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
