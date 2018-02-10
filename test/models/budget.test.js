import Budget from '../../mobile/models/budget';

describe('budget model', () => {
  let budget;

  beforeEach(() => {
    budget = new Budget('test', 100);
  });

  it('should have 3 properties: category, target, value', () => {
    let testCategory = 'test';
    let testTarget = '100.00';
    let testBudget = new Budget(testCategory, testTarget);
    let testValue = '0.00';

    expect(testBudget.category).toEqual(testCategory);
    expect(testBudget.target).toEqual(testTarget);
    expect(testBudget.value).toEqual(testValue);
  });

  it('should be able to add to its current value, returning new value', () => {
    let expected = '100.00'; // starting from 0
    let newValue = budget.add('100.00');
    expect(budget.value).toEqual(expected);
    expect(newValue).toEqual(expected);
  });

  it('should be able to subtract from its current value, returning new value', () => {
    let expected = '50.00';
    budget.add('100.00');
    var newValue = budget.subtract(50);
    expect(budget.value).toEqual(expected);
    expect(newValue).toEqual(expected);
  });
});