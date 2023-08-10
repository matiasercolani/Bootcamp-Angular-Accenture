import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePageComponent } from './favorite-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

describe('FavoritePageComponent', () => {
  let component: FavoritePageComponent;
  let fixture: ComponentFixture<FavoritePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritePageComponent, PlayListHeaderComponent, PlayListBodyComponent, OrderListPipe],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(FavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
