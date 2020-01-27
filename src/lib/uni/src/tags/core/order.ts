/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Tag, ValuePriority} from '../tag';


export class Order extends Tag {
  readonly tag = 'order';

  build(input: string): Map<string, ValuePriority> {
    input = input || '0';
    const cache = this.getCache(input);

    if (cache) {
      return cache;
    }

    const styles = new Map().set('order', {value: parseInt(input, 10), priority: 0});

    this.setCache(input, styles);

    return styles;
  }
}
