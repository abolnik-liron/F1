import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-race-table',
  templateUrl: './race-table.component.html',
  styleUrls: ['./race-table.component.scss']
})
export class RaceTableComponent implements OnInit {
  @Input('races') races;
  @Input('activeDriver') activeDriver;

  constructor() { }

  ngOnInit() {
  }

}
