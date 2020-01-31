import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../media';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() medias: Media[];

}
