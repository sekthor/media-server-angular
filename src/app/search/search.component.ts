import { Component, OnInit } from '@angular/core';
import { Media } from '../media';
import { MediaService } from '../media.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  medias$: Observable<Media[]>;
  private searchTerms = new Subject<string>();

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.medias$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.mediaService.searchMedias(term)),
    );
  }

  // method called through event binding with searchbar input
  search(term: string):void {
    this.searchTerms.next(term);
  }
}
