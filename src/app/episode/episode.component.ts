import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() episode: Episode;



}
