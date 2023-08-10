import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { SessionGuard } from './session.guard';

describe('sessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => executeGuard(...guardParameters));
  // let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
