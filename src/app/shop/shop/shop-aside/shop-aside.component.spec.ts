import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAsideComponent } from './shop-aside.component';

describe('ShopAsideComponent', () => {
  let component: ShopAsideComponent;
  let fixture: ComponentFixture<ShopAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
