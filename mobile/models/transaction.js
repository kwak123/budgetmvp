class Transaction {
  constructor(name, cost) {
    if (!name || !name.length || cost === undefined) {
      throw `Invalid params, received: name = ${name}, cost = ${cost}`
    }
    this.name = name;
    this.cost = cost;
  }
}

Transaction.TransactionSchema = {
  name: 'transaction',
  properties: {

  }
};