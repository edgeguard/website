import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

	transform(value: string, limit = 25, ellipsis = '...') {
		var trimmedString = value.substr(0,limit);
		trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
		return `${trimmedString}${ellipsis}`;
	  }

}
