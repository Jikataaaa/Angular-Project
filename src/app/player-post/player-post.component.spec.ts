import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPostComponent } from './player-post.component';

describe('PlayerPostComponent', () => {
  let component: PlayerPostComponent;
  let fixture: ComponentFixture<PlayerPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
