import { Pipe, PipeTransform } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/angular";
import { MbscEventcalendarView } from "@mobiscroll/angular-ivy";

@Pipe({
  name: 'selectMbscEventalendarView'
})
export class SelectMbscEventalendarViewPipe implements PipeTransform {
  transform = (view: CustomEvent<SegmentChangeEventDetail>|null): MbscEventcalendarView => {
    return view?.detail.value === 'month' || view?.detail.value === 'week'
      ? ({
        agenda: { type: view?.detail.value, scrollable: true },
        calendar: { type: view?.detail.value },
      } as const)
      : ({
        agenda: { type: "year", scrollable: true },
      } as const);
  }
}