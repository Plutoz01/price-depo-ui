// TODO: should use common file with back-end
export class Pageable {
  static readonly defaultPageSize = 10;
  static readonly maximumPageSize = 100;

  static of( page = 0, size = Pageable.defaultPageSize ): Pageable {
    page = page < 0 ? 0 : page;
    size = size < 1 ? Pageable.defaultPageSize : size;
    size = size > Pageable.maximumPageSize ? Pageable.maximumPageSize : size;
    return new Pageable( page, size );
  }

  private constructor( public readonly page = 0, public readonly size = Pageable.defaultPageSize ){
  }
}
