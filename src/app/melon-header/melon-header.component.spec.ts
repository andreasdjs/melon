import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelonHeaderComponent } from './melon-header.component';

describe('MelonHeaderComponent', () => {
  let component: MelonHeaderComponent;
  let fixture: ComponentFixture<MelonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
