import { TestBed } from '@angular/core/testing';

import { AdminPeticionesService } from './admin-peticiones.service';

describe('AdminPeticionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPeticionesService = TestBed.get(AdminPeticionesService);
    expect(service).toBeTruthy();
  });
});
