import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDisplayListComponent } from './role-display-list.component';

describe('RoleDisplayListComponent', () => {
  let component: RoleDisplayListComponent;
  let fixture: ComponentFixture<RoleDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
