import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guid'
})
export class GuidPipe implements PipeTransform {

  transform(value: any, args?: any): any {
	const parts = value.split('/');
	return parts[parts.length-1];
  }

}
