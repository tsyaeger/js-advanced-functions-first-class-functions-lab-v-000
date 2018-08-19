// Code your solution in this file!


const returnFirstTwoDrivers = function two (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function last_two(drivers) {
  return drivers.slice(-2)
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


createFareMultiplier = function mult ()

describe('createFareMultiplier()', function () {
    it('returns a function', function () {
      const fareMultiplier = createFareMultiplier(2);

      expect(fareMultiplier).to.be.a('function');
    });

    it('should multiply a given value using the created multiplier', function () {
      const fareQuintupler = createFareMultiplier(5);

      expect(fareQuintupler(5)).to.eql(25);
    });
  });
