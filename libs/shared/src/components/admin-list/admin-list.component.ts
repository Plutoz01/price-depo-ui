import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Identifiable } from "../../../../data-handling/src/models/identifiable.interface";
import { ColumnDefinition } from "../../models/column-definition.interface";

@Component( {
  selector: 'pd-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: [ './admin-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AdminListPageComponent<T extends Identifiable<any>> {

  @Input() items: T[];
  @Input() title: string;
  @Input() columnDefinitions: ColumnDefinition[];

  constructor( protected router: Router, protected route: ActivatedRoute ) {
  }

  onSelect( selected: T ) {
    this.router.navigate( [ `./${ selected.id }` ], {
      relativeTo: this.route
    } );
  }

  onCreateNew() {
    this.router.navigate( [ 'new' ], {
      relativeTo: this.route
    } );  }
}
