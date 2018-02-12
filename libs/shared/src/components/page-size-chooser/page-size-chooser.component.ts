import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Pageable } from '@price-depo-ui/data-handling';

@Component( {
  selector: 'pd-page-size-chooser',
  templateUrl: './page-size-chooser.component.html',
  styleUrls: [ './page-size-chooser.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PageSizeChooserComponent {

  @Input() choices: number[] = Pageable.defaultPageSizes;
  @Input() selected: number;
  @Output() select = new EventEmitter<number>();

  onSelect( newSelection: number ) {
    if ( newSelection !== this.selected ) {
      this.select.emit( newSelection );
    }
  }

}


