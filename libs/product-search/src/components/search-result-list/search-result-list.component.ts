import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@price-depo-ui/product';

@Component( {
  selector: 'pd-product-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: [ './search-result-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class SearchResultListComponent {
  @Input() items: Product[] = [];

  itemTrackByFn( index: number, item: Product ) {
    return item.id;
  }
}
