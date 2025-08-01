import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroComponent } from './rubro.component';

describe('RubroComponent', () => {
  let component: RubroComponent;
  let fixture: ComponentFixture<RubroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
