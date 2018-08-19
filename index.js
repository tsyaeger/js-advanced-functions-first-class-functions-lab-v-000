// Code your solution in this file!


const returnFirstTwoDrivers = function two (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function last_two(drivers) {
  return drivers.slice(-2)
};


const selectingDrivers = function 

escribe('selectingDrivers', function () {
    it('has the `returnFirstTwoDrivers` function to as its first element', function () {
      expect(selectingDrivers[0]).to.eql(returnFirstTwoDrivers);
    });

    it('has the `returnLastTwoDrivers` function to as its last element', function () {
      expect(selectingDrivers[1]).to.eql(returnLastTwoDrivers);
    });

    it('allows us to invoke either function from the array', function () {
      expect(selectingDrivers[0](drivers)).to.eql(['Sally', 'Bob']);

      expect(selectingDrivers[1](drivers)).to.eql(['Freddy', 'Claudia']);
    });
  });