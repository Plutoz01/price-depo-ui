import { HttpClient, HttpParams } from "@angular/common/http";
import { CrudRepository } from "@price-depo-ui/data-handling/src/models/crud-repository.interface";
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { Page } from "@price-depo-ui/data-handling/src/models/page.interface";
import 'rxjs/add/operator/mapTo';
import { Observable } from "rxjs/Observable";

export abstract class CrudHttpBaseRepository<T extends Identifiable<ID>, ID> implements CrudRepository<T, ID> {

  static convertToHttpParams( obj: Object ): HttpParams {
    // TODO: refactor to use reduce
    const httpParams = new HttpParams();
    for ( const key in obj ) {
      if ( obj.hasOwnProperty( key ) && obj[ key ] ) {
        httpParams.set( key, obj[ key ] );
      }
    }
    return httpParams;
  }

  constructor( protected httpClient: HttpClient ) {
  }

  getAll( page?: Page ): Observable<T[]> {
    const pageParams: HttpParams = page ? this.convertPageToHttpParams( page ) : undefined;
    return this.httpClient.get<T[]>( `${ this.getApiUrl() }`, { params: pageParams } );
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
    console.log( 'should save inside repo:', entity );
    return this.isEntityNew( entity ) ?
      this.create( entity ) :
      this.update( entity );
  }

  remove( id: ID ): Observable<void> {
    return this.httpClient.delete( `${ this.getApiUrl() }/${ id }` ).mapTo( null );
  }


  protected abstract getApiUrl(): string;
  protected convertPageToHttpParams( page: Page ) {
    return CrudHttpBaseRepository.convertToHttpParams( page );
  }
  protected isEntityNew( entity: T ): boolean {
    return !entity.id;
  }
}