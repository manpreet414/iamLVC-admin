import { HolisticPage } from './app.po';

describe('Holistic App', () => {
  let page: HolisticPage;

  beforeEach(() => {
    page = new HolisticPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
