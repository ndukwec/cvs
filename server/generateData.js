let faker = require('faker');

let database = {accounts: []};

for (let i = 0; i < 1; i++) {
  database.accounts.push({
    1: {
      accountName: 'IRA - 5200',
      availableCash: faker.random.number(),
      change: faker.random.number() + "/" + faker.random.number()
    },
    2: {
      accountName: 'AAA - 1812',
      availableCash: faker.random.number(),
      change: faker.random.number() + "/" + faker.random.number()
    },
    3: {
      accountName: 'AAA - 3810',
      availableCash: faker.random.number(),
      change: faker.random.number() + "/" + faker.random.number()
    },
    4: {
      accountName: 'REG - 2019',
      availableCash: faker.random.number(),
      change: faker.random.number() + "/" + faker.random.number()
    },
    5: {
      accountName: 'REG - 2025',
      availableCash: faker.random.number(),
      change: faker.random.number() + "/" + faker.random.number()
    },
    6: {
      accountName: 'ACS - 25',
      availableCash: faker.random.number(),
      change: faker.random.number() + "/" + faker.random.number()
    }
  });
}

