import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { emptyPaginationInfo, PaginationInfo } from '@price-depo-ui/data-handling';
import * as _ from 'lodash';

@Component( {
  selector: 'pd-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: [ './paginator.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PaginatorComponent {
  static readonly defaultPageRangeWidth = 2;

  @Input() paginationInfo: PaginationInfo = emptyPaginationInfo();
  @Input() pageRangeWidth: number = PaginatorComponent.defaultPageRangeWidth;
  @Output() pageTo = new EventEmitter<number>();

  get pageRange() {
    let rangeStart = this.paginationInfo.pageNumber - this.pageRangeWidth;
    rangeStart = rangeStart < 0 ? 0 : rangeStart;

    let rangeEnd = this.paginationInfo.pageNumber + this.pageRangeWidth;
    rangeEnd = rangeEnd > this.paginationInfo.totalPages - 1 ? this.paginationInfo.totalPages - 1 : rangeEnd;

    return _.range( rangeStart, rangeEnd + 1 );
  }

  onPageTo( targetPage: number ) {
    if ( this.paginationInfo.pageNumber !== targetPage ) {
      this.pageTo.emit( targetPage );
    }
  }

  onFirst() {
    if ( this.paginationInfo.hasPreviousPage ) {
      this.pageTo.emit( 0 );
    }
  }

  onPrevious() {
    if ( this.paginationInfo.hasPreviousPage ) {
      this.pageTo.emit( this.paginationInfo.pageNumber - 1 );
    }
  }

  onNext() {
    if ( this.paginationInfo.hasNextPage ) {
      this.pageTo.emit( this.paginationInfo.pageNumber + 1 );
    }
  }

  onLast() {
    if ( this.paginationInfo.hasNextPage ) {
      this.pageTo.emit( this.paginationInfo.totalPages - 1 );
    }
  }

}
