import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelonTitleComponent } from './melon-title.component';

describe('MelonTitleComponent', () => {
  let component: MelonTitleComponent;
  let fixture: ComponentFixture<MelonTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelonTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
