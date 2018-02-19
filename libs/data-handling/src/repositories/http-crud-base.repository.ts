import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mapTo';
import { Observable } from 'rxjs/Observable';

import { Identifiable } from '../models/identifiable.interface';
import { Pageable } from '../models/pageable.class';
import { PagedResponse } from '../models/paged-response.interface';
import { CrudRepository } from '../repositories/crud-repository.interface';

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

  static convertPageableToHttpParams( pageable: Pageable ) {
    return HttpCrudBaseRepository.convertToHttpParams( pageable );
  }

  getAll( pageable: Pageable ): Observable<PagedResponse<T>> {
    const pageParams: HttpParams = HttpCrudBaseRepository.convertPageableToHttpParams( pageable );
    return this.httpClient.get<PagedResponse<T>>( `${this.getApiUrl()}`, { params: pageParams } );
  }

  getById( id: ID ): Observable<T | undefined> {
    return this.httpClient.get<T>( `${this.getApiUrl()}/${id}` ).catch( ( error: HttpErrorResponse ) => {
      if ( error.status === 404 ) {
        return Observable.of( undefined );
      }
      throw error;
    } );
  }

  create( entity: T ): Observable<T> {
    return this.httpClient.post<T>( `${this.getApiUrl()}`, entity );
  }

  update( entity: T ): Observable<T> {
    return this.httpClient.put<T>( `${this.getApiUrl()}/${entity.id}`, entity );
  }

  save( entity: T ): Observable<T> {
    return this.isEntityNew( entity ) ? this.create( entity ) : this.update( entity );
  }

  remove( id: ID ): Observable<void> {
    return this.httpClient.delete( `${this.getApiUrl()}/${id}` ).mapTo( null );
  }

  protected abstract getApiUrl(): string;

  protected isEntityNew( entity: T ): boolean {
    return !entity.id;
  }
}
