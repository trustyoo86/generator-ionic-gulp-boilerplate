describe('ionic app page list', function () {
  it('dom test', function () {
    browser.get('http://localhost:8100/#/app.browse');
    expect(element(by.id('browse')).getText()).toEqual('Browse');
  });
});
