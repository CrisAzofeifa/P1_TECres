import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadministradoresComponent } from './padministradores.component';

describe('PadministradoresComponent', () => {
  let component: PadministradoresComponent;
  let fixture: ComponentFixture<PadministradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadministradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
