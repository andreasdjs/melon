import { MelonPage } from './app.po';

describe('melon App', () => {
  let page: MelonPage;

  beforeEach(() => {
    page = new MelonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
