import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterClaim"
})
export class FilterClaimPipe implements PipeTransform {
  transform(value: any[], args?: string): any[] {
    if (!value) return;
    if (!args) return value;

    return value.filter(item => {
      return item["name"] && item["name"].toLowerCase().includes(args);
    });
  }
}
