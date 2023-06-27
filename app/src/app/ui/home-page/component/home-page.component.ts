import { Component } from "@angular/core";
import { DateType } from "@mobiscroll/angular-ivy/dist/js/core/util/datetime";

import { entries } from "../constants/home-page.constants";
import { MbscEntry } from "../types/home-page.types";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  entries: MbscEntry[] = entries;

  selectedDate: DateType = new Date('2021-01-01T01:00:00.000Z');
  minDate: DateType = new Date('2021-01-01T01:00:00.000Z');
  maxDate: DateType = new Date('2022-01-01T01:00:00.000Z');

  constructor() {}

}