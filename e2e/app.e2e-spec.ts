import { NgxSwaggerPage } from './app.po';

describe('ngx-swagger App', function() {
  let page: NgxSwaggerPage;

  beforeEach(() => {
    page = new NgxSwaggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
