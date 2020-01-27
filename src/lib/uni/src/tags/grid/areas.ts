/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Tag, ValuePriority} from '../tag';


export class Areas extends Tag {
  readonly tag = 'areas';

  build(input: string): Map<string, ValuePriority> {
    const cache = this.getCache(input);

    if (cache) {
      return cache;
    }

    const areas = (input || DEFAULT_VALUE).split(DELIMETER).map(v => `"${v.trim()}"`);
    const styles: Map<string, ValuePriority> = new Map()
      .set('display', {value: 'grid', priority: 0})
      .set('grid-template-areas', {value: areas.join(' '), priority: 0});

    this.setCache(input, styles);

    return styles;
  }
}

const DEFAULT_VALUE = 'none';
const DELIMETER = '|';
