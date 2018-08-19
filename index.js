// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
  const two = (function (drivers)
}





  describe('returnFirstTwoDrivers()', function () {
    it('should return a new array containing the first two drivers from the passed-in array', function () {
      expect(returnFirstTwoDrivers(drivers)).to.eql(['Sally', 'Bob']);
    });

    it('should be assigned to a constant', function () {
      expect(function () { returnFirstTwoDrivers = 'testing reassignment'; }).to.throw(TypeError);
    });
  });