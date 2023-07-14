import { CanEat } from '../core/CanEat';
import { CanSleep } from '../core/can-sleep';
import { applyMixins } from '../core/create-mixins';

export class HappyDude implements CanEat, CanSleep {
  constructor() {}

  eat!: () => void;
  sleep!: () => void;

  public sing() {
    console.log('lalala lalala ....');
  }
}
applyMixins(HappyDude, [CanEat, CanSleep]);
