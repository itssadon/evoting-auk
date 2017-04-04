import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralGuidelinesComponent } from './electoral-guidelines.component';

describe('ElectoralGuidelinesComponent', () => {
  let component: ElectoralGuidelinesComponent;
  let fixture: ComponentFixture<ElectoralGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectoralGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoralGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
