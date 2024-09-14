import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoBlockComponent } from './basic-info-block.component';

describe('BasicInfoBlockComponent', () => {
  let component: BasicInfoBlockComponent;
  let fixture: ComponentFixture<BasicInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
