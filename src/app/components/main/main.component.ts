import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { listAnimation, fadeIn } from '../animations/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:[listAnimation, fadeIn]
})
export class MainComponent implements OnInit, OnDestroy {
    /** Private subject that handle unsubscribe on component OnDestroy life cycle hook */
  private ngUnsubscribe = new Subject<void>();
  dataColletion = [];
  racesData:any;
  state:string = 'champions';
  activeDriver:string;
  season;
  constructor(private mainService:MainService) { }
  /**
   * First angukar life cycle hook,
   * Calls to main service to get inital data.
   * Assigns the response to dataCollection Array.
   */
  ngOnInit() {
    this.mainService.getListData('worldChampions')
    .takeUntil(this.ngUnsubscribe)
    .subscribe((res:any)=>{
      this.dataColletion = res.MRData.StandingsTable.StandingsLists;
    })
  }

    /** Last angular life cycle hook, call ngUnsubscribe subject and activate all Rxjs takeUntil operator that in turn will unsubscribe from all Observables */
    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }
    /**
     * @param  {} value
     * Method to get an year data and assign to local variable.
     * Change component state and by that change view to table.
     */
    handleCardClick(value){
      this.mainService.getListData('year',value.season)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((res)=>{
        let data:any = res;
        this.racesData = data.MRData.RaceTable.Races;
        this.state = 'races';
        this.season = value.season;
        this.activeDriver = value.DriverStandings[0].Driver.driverId;
      })
    }
}
