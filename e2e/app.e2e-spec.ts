import { ClynixFrontendPage } from './app.po';

describe('clynix-frontend App', function() {
  let page: ClynixFrontendPage;

  beforeEach(() => {
    page = new ClynixFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
