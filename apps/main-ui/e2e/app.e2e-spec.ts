import { browser } from 'protractor';
import { AppPage } from './app.po';

describe( 'core App', () => {
  let page: AppPage;

  beforeEach( () => {
    page = new AppPage();
  } );

  it( 'should display profile page by default', async () => {
    await page.navigateTo();
    const currentUrl = await page.getCurrentUrl();
    expect( currentUrl ).toEqual( browser.baseUrl + 'profile' );
  } );
} );
