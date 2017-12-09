import { browser } from "protractor";
import { AppPage } from './app.po';

describe( 'core App', () => {
  let page: AppPage;

  beforeEach( () => {
    page = new AppPage();
  } );

  it( 'should display profile page by default', () => {
    page.navigateTo();
    expect( page.getCurrentUrl() ).toBe(  browser.baseUrl + 'profile' );
  } );
} );
