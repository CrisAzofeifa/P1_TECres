import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAnuncioComponent } from './perfil-anuncio.component';

describe('PerfilAnuncioComponent', () => {
  let component: PerfilAnuncioComponent;
  let fixture: ComponentFixture<PerfilAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
