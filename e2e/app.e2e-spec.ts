import { MashupPage } from './app.po';

describe('mashup App', function() {
  let page: MashupPage;

  beforeEach(() => {
    page = new MashupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mission UI');
  });
});
