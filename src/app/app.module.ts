import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { MainService } from './services/main.service';
import { CardComponent } from './components/card/card.component';
import { RaceTableComponent } from './components/race-table/race-table.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    CardComponent,
    RaceTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [MainService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
