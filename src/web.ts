import { WebPlugin } from '@capacitor/core';

import { RateAppPlugin } from './definitions';

export class RateAppWeb extends WebPlugin implements RateAppPlugin {
  async requestReview(): Promise<void> {
    return;
  }
}
