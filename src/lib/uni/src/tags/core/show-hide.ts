/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {coerceBooleanProperty} from '@angular/cdk/coercion';

import {Tag, ValuePriority} from '../tag';


const HIDE_STYLES = new Map().set('display', {value: 'none', priority: 100});
const EMPTY_MAP = new Map();

export class Hide extends Tag {
  readonly tag = 'hide';

  build(input: string): Map<string, ValuePriority> {
    return coerceBooleanProperty(input) ? HIDE_STYLES : EMPTY_MAP;
  }
}

