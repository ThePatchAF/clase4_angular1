import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAtribComponent } from './direct-atrib.component';

describe('DirectAtribComponent', () => {
  let component: DirectAtribComponent;
  let fixture: ComponentFixture<DirectAtribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectAtribComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectAtribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
