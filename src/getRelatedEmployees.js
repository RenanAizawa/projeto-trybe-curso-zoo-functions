const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((people) => people.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return employees.reduce((Acumulador, pessoa) => {
      if (pessoa.managers.some((id) => id === managerId)) {
        Acumulador.push(`${pessoa.firstName} ${pessoa.lastName}`);
      }
      return Acumulador;
    }, []);
  }
}

module.exports = { isManager, getRelatedEmployees };
