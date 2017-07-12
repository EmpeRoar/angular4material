import { Angular4materialPage } from './app.po';

describe('angular4material App', () => {
  let page: Angular4materialPage;

  beforeEach(() => {
    page = new Angular4materialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
