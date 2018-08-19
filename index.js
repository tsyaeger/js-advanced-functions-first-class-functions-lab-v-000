// Code your solution in this file!


const returnFirstTwoDrivers = function two (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function last_two(drivers) {
  return drivers.slice(-3)
}

describe('returnLastTwoDrivers()', function () {
    it('should return an array of the last two drivers', function () {
      expect(returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])).to.eql(['Freddy', 'Claudia']);
    });

    it('should be assigned to a constant', function () {
      expect(function () { returnLastTwoDrivers = 'testing reassignment'; }).to.throw(TypeError);
    });
  });