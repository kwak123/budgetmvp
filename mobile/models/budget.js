class Budget {
  constructor(category, target) {
    this.category = category;
    this.target = target;
    this.value = '0.00';
  }

  add(value) {
    // May need further safety checks
    if (isNaN(value)) { throw `Invalid value for ${this.category}, received: ${value}`; }
    this.value = (Number(this.value) + Number(value)).toFixed(2);
  }

  subtract(value) {
    return this.value -= value;
  }
}

// Realm Schema
Budget.BudgetSchema = {
  name: 'Budget',
  properties: {
    category:  'string',
    target: 'string',
  }
};

export default Budget;