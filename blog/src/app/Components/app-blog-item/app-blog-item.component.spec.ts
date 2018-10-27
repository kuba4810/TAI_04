import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogItemComponent } from './app-blog-item.component';

describe('AppBlogItemComponent', () => {
  let component: AppBlogItemComponent;
  let fixture: ComponentFixture<AppBlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
