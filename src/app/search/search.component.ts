import { Component, OnInit } from '@angular/core';
import { Media } from '../media';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  medias: Media[];
}
