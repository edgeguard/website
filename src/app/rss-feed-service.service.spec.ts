import { TestBed, inject } from '@angular/core/testing';

import { RssFeedServiceService } from './rss-feed-service.service';

describe('RssFeedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RssFeedServiceService]
    });
  });

  it('should be created', inject([RssFeedServiceService], (service: RssFeedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
