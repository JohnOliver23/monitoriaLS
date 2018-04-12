const loops = require('./arrays');
describe('interating in array', () => {
  let array = [1, 2, 3, 4, 5, 6]
  
  it('doubling the numbers', () => {
    expect(loops.doubleNumber(array)).toEqual([2, 4, 6, 8, 10, 12]);
  });
  
  xit('filtering even numbers', () => {
    expect(loops.ftEven(array)).toEqual([2, 4, 6]);
  });
  
  xit('filtering odd numbers', () => {
    expect(loops.ftOdd(array)).toEqual([1, 3, 5]);
  });
  
  xit('adding the array values', () => {
    expect(loops.sumArray(array)).toBe(21);
  });
  
  xit('multiplying the array values', () => {
    expect(loops.mtArray(array)).toBe(720);
  });
  
  xit('looking for the first even number', () => {
    expect(loops.findNumber(array)).toBe(2);
  });
  
  
  
});
