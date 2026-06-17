import { TestBed } from '@angular/core/testing';

import { ScrollAnimation } from './scroll-animation';

describe('ScrollAnimation', () => {
  let service: ScrollAnimation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollAnimation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
