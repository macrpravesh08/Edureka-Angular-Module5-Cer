import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment'; // add this 1 of 4

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'momentRelTime'})
export class MomentRelativeTimePipe implements PipeTransform {
  transform(value: string): string {
    return moment(value).fromNow();
  }
}