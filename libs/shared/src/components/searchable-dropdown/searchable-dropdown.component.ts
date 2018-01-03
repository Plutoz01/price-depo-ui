import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import * as _ from 'lodash';

@Component( {
  selector: 'pd-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: [ './searchable-dropdown.component.scss' ]
} )
export class SearchableDropdownComponent<T extends Identifiable<any> | string> {

  @Input() results: T[] = [];
  @Input() isLoading: boolean;
  @Input() selected?: T;
  @Input() displayKey = 'id';
  @Output() search = new EventEmitter<string>();
  @Output() itemSelect = new EventEmitter<T>();

  @ViewChild( 'searchInput' ) searchInputRef: ElementRef;

  isOpen = false;

  get searchInputElement(): HTMLInputElement {
    return this.searchInputRef.nativeElement as HTMLInputElement;
  }

  onSearchChange( text: string ) {
    this.search.emit( text );
  }

  onClose() {
    this.isOpen = false;
  }

  onToggleOpen() {
    this.isOpen = !this.isOpen;
    if ( this.isOpen ) {
      setTimeout( () => {
        this.searchInputElement.focus();
      }, 1 );
    }
  }

  onSelect( selected: T ) {
    this.itemSelect.emit( selected );
    this.onClose();
  }

  getDisplayValueFrom( item: T ): any {
    return _.get( item, this.displayKey, item );
  }

}
