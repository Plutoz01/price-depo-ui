import { HttpClient, HttpParams } from "@angular/common/http";
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";
import { PagedResponse } from "@price-depo-ui/data-handling/src/models/paged-response.interface";
import { CrudRepository } from "@price-depo-ui/data-handling/src/repositories/crud-repository.interface";
import 'rxjs/add/operator/mapTo';
import { Observable } from "rxjs/Observable";
import { Identifiable } from "../models/identifiable.interface";

export abstract class HttpCrudBaseRepository<T extends Identifiable<ID>, ID> implements CrudRepository<T, ID> {

  constructor( protected httpClient: HttpClient ) {
  }

  static convertToHttpParams( obj: Object ): HttpParams {
    // TODO: refactor to use reduce
    let httpParams = new HttpParams();
    for ( const key in obj ) {
      if ( obj.hasOwnProperty( key ) && obj[ key ].toString() ) {
        httpParams = httpParams.set( key, obj[ key ] );
      }
    }
    return httpParams;
  }

  getAll( pageable: Pageable ): Observable<PagedResponse<T>> {
    const pageParams: HttpParams = this.convertPageToHttpParams( pageable );
    return this.httpClient.get<PagedResponse<T>>( `${ this.getApiUrl() }`, { params: pageParams } );
  }

  getById( id: ID ): Observable<T | undefined> {
    return this.httpClient.get<T>( `${ this.getApiUrl() }/${ id }` );
  }

  create( entity: T ): Observable<T> {
    return this.httpClient.post<T>( `${ this.getApiUrl() }`, entity );
  }

  update( entity: T ): Observable<T> {
    return this.httpClient.put<T>( `${ this.getApiUrl() }/${ entity.id }`, entity );
  }

  save( entity: T ): Observable<T> {
    return this.isEntityNew( entity ) ?
      this.create( entity ) :
      this.update( entity );
  }

  remove( id: ID ): Observable<void> {
    return this.httpClient.delete( `${ this.getApiUrl() }/${ id }` ).mapTo( null );
  }


  protected abstract getApiUrl(): string;

  protected convertPageToHttpParams( pageable: Pageable ) {
    return HttpCrudBaseRepository.convertToHttpParams( pageable );
  }

  protected isEntityNew( entity: T ): boolean {
    return !entity.id;
  }
}
