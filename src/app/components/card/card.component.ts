import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input("data") data;
  constructor() { }
  driverData:any;
  constructorsData:any;
  wins:string;
  points:string;
  ngOnInit() {
    this.driverData = this.data.DriverStandings[0].Driver;
    this.constructorsData = this.data.DriverStandings[0].Constructors[0];
    this.wins = this.data.DriverStandings[0].wins;
    this.points = this.data.DriverStandings[0].points;
  }

  setDriverImage(name){
    return `assets/${name}.jpg`;
  }
}
