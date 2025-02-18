import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'getAbsoluteNumber'
})
export class GetAbsoluteNumberPipe implements PipeTransform {
  transform(value: number): number {
    return Math.abs(value);
  }
}