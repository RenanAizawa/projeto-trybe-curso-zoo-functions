const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const emploeyer = (people) => people.id === id;
  return employees.find(emploeyer);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));