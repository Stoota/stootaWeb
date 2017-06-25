import { StootaPage } from './app.po';

describe('stoota App', () => {
  let page: StootaPage;

  beforeEach(() => {
    page = new StootaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
