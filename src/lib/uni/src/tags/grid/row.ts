/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Tag, ValuePriority} from '../tag';


export class Row extends Tag {
  readonly tag = 'row';

  build(input: string): Map<string, ValuePriority> {
    input = input || 'auto';
    const cache = this.getCache(input);

    if (cache) {
      return cache;
    }

    const styles: Map<string, ValuePriority> = new Map()
      .set('grid-row', {value: input, priority: 0});

    this.setCache(input, styles);

    return styles;
  }
}
