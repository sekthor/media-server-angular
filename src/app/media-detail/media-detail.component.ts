import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../media';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.scss']
})
export class MediaDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() media: Media;

}
