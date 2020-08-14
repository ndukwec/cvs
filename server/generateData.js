let faker = require('faker');

let database = {accounts: []};

for (let i = 0; i < 5; i++) {
  database.accounts.push({
      id: i,
      accountName: 'IRA - 5200',
      availableCash: faker.random.number(),
      change: faker.random.number() + "/" + faker.random.number()
  });
}

