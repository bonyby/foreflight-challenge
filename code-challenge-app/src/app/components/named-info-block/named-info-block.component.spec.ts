import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInfoBlockComponent } from './named-info-block.component';

describe('NamedInfoBlockComponent', () => {
  let component: NamedInfoBlockComponent;
  let fixture: ComponentFixture<NamedInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedInfoBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
