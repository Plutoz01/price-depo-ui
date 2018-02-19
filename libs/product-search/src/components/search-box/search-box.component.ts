import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component( {
  selector: 'pd-product-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [ './search-box.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class SearchBoxComponent implements AfterViewInit, OnDestroy {
  @ViewChild( 'searchInput' ) searchInput: ElementRef;

  @Output() search = new EventEmitter<string>();

  private onDestroySource = new Subject();

  ngAfterViewInit() {
    Observable.fromEvent( this.searchInput.nativeElement, 'keydown' )
      .debounceTime( 300 ) // TODO: extract time to const time inejcted config value
      .map( () => this.searchInput.nativeElement.value.trim() )
      .distinctUntilChanged()
      .takeUntil( this.onDestroySource )
      .subscribe( this.search );
  }

  ngOnDestroy() {
    this.onDestroySource.next();
    this.onDestroySource.unsubscribe();
  }
}
