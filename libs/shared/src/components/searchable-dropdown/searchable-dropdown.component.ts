import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Identifiable } from "@price-depo-ui/data-handling";
import * as _ from 'lodash';

@Component( {
  selector: 'pd-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: [ './searchable-dropdown.component.scss' ]
} )
export class SearchableDropdownComponent<T extends Identifiable<any> | string> {

  @Input() results: T[] = [];
  @Input() selected?: T;
  @Input() displayKey = 'id';
  @Input() selectionRemovable = true;
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

  get removeButtonVisible(): boolean {
    return this.selectionRemovable && !!this.selected;
  }

  onRemove() {
    this.onSelect( undefined );
  }

}
