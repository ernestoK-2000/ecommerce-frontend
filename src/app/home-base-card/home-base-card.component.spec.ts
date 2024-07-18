import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBaseCardComponent } from './home-base-card.component';

describe('HomeBaseCardComponent', () => {
  let component: HomeBaseCardComponent;
  let fixture: ComponentFixture<HomeBaseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBaseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
