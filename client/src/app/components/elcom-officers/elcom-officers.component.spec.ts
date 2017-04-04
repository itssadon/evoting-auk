import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElcomOfficersComponent } from './elcom-officers.component';

describe('ElcomOfficersComponent', () => {
  let component: ElcomOfficersComponent;
  let fixture: ComponentFixture<ElcomOfficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElcomOfficersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElcomOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
