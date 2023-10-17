import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSchedulerComponent } from './page-scheduler.component';

describe('PageSchedulerComponent', () => {
  let component: PageSchedulerComponent;
  let fixture: ComponentFixture<PageSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSchedulerComponent]
    });
    fixture = TestBed.createComponent(PageSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
