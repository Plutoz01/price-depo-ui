import { browser } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get( '/' );
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
}
