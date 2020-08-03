import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyCardComponent } from './spotify-card.component';

describe('SpotifyCardComponent', () => {
  let component: SpotifyCardComponent;
  let fixture: ComponentFixture<SpotifyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
