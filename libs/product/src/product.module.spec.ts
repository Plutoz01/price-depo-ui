import { ProductModule } from './product.module';

describe( 'ProductModule', () => {
  it( 'should work', () => {
    expect( new ProductModule() ).toBeDefined();
  } );
} );
