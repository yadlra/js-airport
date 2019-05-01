describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function () {
    expect(airport.planes()).toEqual([plane]);
  });
});
