const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) => employeeName.includes(employee.firstName)
  || employeeName.includes(employee.lastName));
}

module.exports = getEmployeeByName;
