import { PsCodeAlongPage } from './app.po';

describe('ps-code-along App', () => {
  let page: PsCodeAlongPage;

  beforeEach(() => {
    page = new PsCodeAlongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
