import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponetComponent } from './favorite-componet.component';

describe('FavoriteComponetComponent', () => {
  let component: FavoriteComponetComponent;
  let fixture: ComponentFixture<FavoriteComponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteComponetComponent]
    });
    fixture = TestBed.createComponent(FavoriteComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
