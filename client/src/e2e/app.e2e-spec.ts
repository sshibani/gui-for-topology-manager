import { TopologyClientPage } from './app.po';

describe('topology-client App', function() {
  let page: TopologyClientPage;

  beforeEach(() => {
    page = new TopologyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
