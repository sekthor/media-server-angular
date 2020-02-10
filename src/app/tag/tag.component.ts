import { Component, OnInit } from '@angular/core';
import { Media } from '../media';
import { MediaService } from '../media.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor(private mediaService: MediaService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getMediaByTag();
  }

  tag: string;
  media: Media[];

  getMediaByTag() {
    this.tag = this.route.snapshot.paramMap.get('tag');
    this.mediaService.getMediaByTag(this.tag).subscribe(media => this.media = media);
  }

}
