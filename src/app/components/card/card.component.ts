import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  /**
   * @param  {} "data"
   * Hold each driver data.
   */
  @Input("data") data;
  driverData:any;
  constructorsData:any;
  wins:string;
  points:string;
  
  constructor() { }
  
  /**
   * First Agular lifecycle hook,
   * Set component variables by @Input data.
   */
  ngOnInit() {
    this.driverData = this.data.DriverStandings[0].Driver;
    this.constructorsData = this.data.DriverStandings[0].Constructors[0];
    this.wins = this.data.DriverStandings[0].wins;
    this.points = this.data.DriverStandings[0].points;
  }
  
  /**
   * @param  {} name
   * Method to return a string with a path to image.
   */
  setDriverImage(name){
    return `assets/${name}.jpg`;
  }
}
