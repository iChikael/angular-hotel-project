import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSignInComponent } from './space-sign-in.component';

describe('SpaceSignInComponent', () => {
  let component: SpaceSignInComponent;
  let fixture: ComponentFixture<SpaceSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceSignInComponent]
    });
    fixture = TestBed.createComponent(SpaceSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
