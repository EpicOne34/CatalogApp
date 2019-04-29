import { Component, Input, Output, EventEmitter, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})

export class FormComponent implements OnDestroy {
  calendarOptions: any = [
    { text: "Today", value: "today" },
    { text: "This Week", value: "thisWeek" },
    { text: "This Month", value: "thisMonth" },
    { text: "This Year", value: "thisYear" },
    { text: "Year to Date", value: "yearToDate" },
    { text: "Next Week", value: "nextWeek" },
    { text: "Next Month", value: "nextMonth" },
    { text: "Next Year", value: "nextYear" },
    { text: "Last Week", value: "lastWeek" },
    { text: "Last Month", value: "lastMonth" },
    { text: "Last Year", value: "lastYear" }
  ];
  dropdownItems: any[] = [];
  dropdownOptions: any;
  form: FormGroup;
  formCells: any[] = [];
  initialFormValue: any;
  _inputFormCells: any;
  subscription: any = Subscription;
  subscriptions: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}