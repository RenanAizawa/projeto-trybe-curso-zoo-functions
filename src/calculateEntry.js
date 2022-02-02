const data = require('../data/zoo_data');

const { prices } = data;

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
const somaChild = (objeto) => {
  const price = prices.child * objeto.child;
  return price;
};

const somaAdult = (objeto) => {
  const price = prices.adult * objeto.adult;
  return price;
};

const somaSenior = (objeto) => {
  const price = prices.senior * objeto.senior;
  return price;
};

const countChild = (para) => {
  const retorno = para.filter((entrant) => entrant.age < 18).length;
  return retorno;
};

const countAdult = (para) => {
  const retorno = para.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  return retorno;
};

const countSenior = (para) => {
  const retorno = para.filter((entrant) => entrant.age >= 50).length;
  return retorno;
};

const quantidadePorIdade = (entrant) => ({ child: countChild(entrant),
  adult: countAdult(entrant),
  senior: countSenior(entrant) });

function countEntrants(entrants) {
  // seu código aqui
  return quantidadePorIdade(entrants);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPrice = somaChild(countEntrants(entrants))
  + somaAdult(countEntrants(entrants))
  + somaSenior(countEntrants(entrants));
  return totalPrice;
}
// calculateEntry(entrants);
module.exports = { calculateEntry, countEntrants };
