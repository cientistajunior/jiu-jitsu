import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticle } from './news-article';

describe('NewsArticle', () => {
  let component: NewsArticle;
  let fixture: ComponentFixture<NewsArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
