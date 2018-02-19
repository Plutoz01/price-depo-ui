import { ErrorHandlingModule } from './error-handling.module';

describe( 'ErrorHandlingModule', () => {
  it( 'should work', () => {
    expect( new ErrorHandlingModule() ).toBeDefined();
  } );
} );
