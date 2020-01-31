import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Show } from '../show';
import { Episode } from '../episode';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private showService: ShowService,
    private location: Location) { }

  ngOnInit() {
    this.getShow();
  }

  show: Show;
  currentEpisode: Episode;

  onSelect(episode: Episode){
    this.currentEpisode = episode;
  }

  getShow(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.showService.getMovie(id)
      .subscribe(show => this.show = show);
  }

  selectEpisode(episode: Episode){
    this.currentEpisode = episode;
       
  }

}
