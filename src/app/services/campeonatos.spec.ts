import { TestBed } from '@angular/core/testing';

import { Campeonatos } from './campeonatos';

describe('Campeonatos', () => {
  let service: Campeonatos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Campeonatos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
