import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Episode } from '../media';
import { Season } from '../media';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() season: Season;

  currentEpisode: Episode;

  @Output() selectEvent = new EventEmitter();


  onSelect(episode: Episode){
    this.currentEpisode = episode;
    this.selectEvent.emit(episode);
  }



}
