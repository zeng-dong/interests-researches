describe('ng test works', () => {
  let sut;

  beforeEach(() => {
    sut = {};
  });

  it('should run with --include src/app/heroes/canruntests.spec.ts', () => {
    expect(1).toBeTruthy();
  });
});
