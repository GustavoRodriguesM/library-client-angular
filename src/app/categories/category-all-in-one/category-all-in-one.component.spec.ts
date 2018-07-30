import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAllInOneComponent } from './category-all-in-one.component';

describe('CategoryAllInOneComponent', () => {
  let component: CategoryAllInOneComponent;
  let fixture: ComponentFixture<CategoryAllInOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAllInOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAllInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
