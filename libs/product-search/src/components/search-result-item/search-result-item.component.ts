import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@price-depo-ui/product';

@Component( {
  selector: 'pd-product-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: [ './search-result-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class SearchResultItemComponent {

  @Input() item: Product;

}
