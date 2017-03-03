import { PenniesPage } from './app.po';

describe('pennies App', function() {
  let page: PenniesPage;

  beforeEach(() => {
    page = new PenniesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
