import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { Show } from '../media';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.getShows();
  }

  shows: Show[];

  getShows(): void {
    this.showService.getRecentShows().subscribe(shows => this.shows = shows);
  }

}
