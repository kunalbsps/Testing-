import { TestBed } from '@angular/core/testing';

import { LoginpreventGuard } from './loginprevent.guard';

describe('LoginpreventGuard', () => {
  let guard: LoginpreventGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginpreventGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
