import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FilterBase, FilterElement, FilterMatchType, Identifiable } from "@price-depo-ui/data-handling";
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/filter";
import 'rxjs/add/operator/switchMap';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Subject } from "rxjs/Subject";

import { searchProviderTokens } from "../../../../../apps/admin/src/app/tokens/search-provider.tokens";
import { SearchableDropdownControlDef } from "../../models/dynamic-form.interface";
import { SearchProvider } from "../../models/search-provider.interface";

@Component( {
  selector: 'pd-dynamic-form-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: [ './searchable-dropdown.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => DynamicFormSearchableDropdownComponent ),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DynamicFormSearchableDropdownComponent<T extends Identifiable<ID>, ID> implements OnInit, ControlValueAccessor {

  @Input() controlDef: SearchableDropdownControlDef;
  isDisabled = false;


  selectedValue$: Observable<T>;
  searchResults$: Observable<T[]>;
  private controlValueSource = new ReplaySubject<ID>( 1 );
  private selectedValueSource = new BehaviorSubject<T>( undefined );
  private searchExpressionSource = new Subject<string>();
  private searchProvider: SearchProvider<T, ID, any>;
  private _onChange: ( changed: any ) => void = ( _: any ) => {};

  constructor( private readonly injector: Injector ) {
    this.selectedValue$ = this.createSelectedValue$();
    this.searchResults$ = this.createSearchResult$();
  }

  createSelectedValue$(): Observable<T> {
    return Observable.merge(
      this.selectedValueSource.asObservable(),
      this.handleControlValueChange$()
    ) as Observable<T>;
  }

  handleControlValueChange$(): Observable<T> {
    return this.controlValueSource.asObservable()
      .distinctUntilChanged()
      .switchMap( selectedId => this.searchProvider.getById( selectedId ) )
      .catch( () => Observable.of( undefined ) );
  }

  createSearchResult$(): Observable<T[]> {
    return this.searchExpressionSource.asObservable()
      .debounceTime( 300 )
      .distinctUntilChanged()
      .map( ( searchExpression: string ): FilterBase<any> => {
        if ( !searchExpression ) {
          return null;
        }

        const filterElement: FilterElement = {
          value: searchExpression,
          matchType: FilterMatchType.contains
        };
        return {
          [ this.controlDef.displayKey ]: filterElement
        };
      } )
      .switchMap( filter => {
        if ( filter ) {
          return this.searchProvider.filterBy( filter );
        } else {
          return Observable.of( [] );
        }
      } );
  }

  ngOnInit() {
    const token = searchProviderTokens[ this.controlDef.searchProviderName ];
    if ( !token ) {
      throw new Error( 'Unrecognized search provider name: ' + this.controlDef.searchProviderName );
    }
    this.searchProvider = this.injector.get( token );
  }

  writeValue( newValue: ID ): void {
    if ( newValue !== undefined && newValue !== null ) {
      this.controlValueSource.next( newValue );
    }
  }

  registerOnChange( fn: any ): void {
    this._onChange = fn;
  }

  registerOnTouched( fn: any ): void {
  }

  setDisabledState( isDisabled: boolean ): void {
    this.isDisabled = isDisabled;
  }

  onSearch( text: string ) {
    this.searchExpressionSource.next( text );
  }

  onSelect( selected: T ) {
    this.selectedValueSource.next( selected );
    this._onChange( selected ? selected.id : selected );
  }
}
