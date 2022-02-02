const data = require('../data/zoo_data');

const { hours, species } = data;

const diasSemana = Object.keys(hours);
const animaisZoo = species.map((animal) => animal.name);

const objetaoAo = () => {
  const agendaDaSemana = diasSemana.reduce((acc, currDay) => {
    if (currDay === 'Monday') {
      acc[currDay] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      acc[currDay] = {
        officeHour: `Open from ${hours[currDay].open}am until ${hours[currDay].close}pm`,
        exhibition: species
          .filter((animal) => animal.availability.includes(currDay))
          .map((animal) => animal.name),
      };
    }
    return acc;
  }, {});
  return agendaDaSemana;
};

const agendaPorHorario = (day) => {
  const objetinho = {};
  if (day === 'Monday') {
    objetinho[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    objetinho[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    };
  }
  return objetinho;
};

const agendaPorAnimal = (animalPara) => species
  .find((animal) => animal.name === animalPara).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (diasSemana.includes(scheduleTarget)) {
    return agendaPorHorario(scheduleTarget);
  }
  if (animaisZoo.includes(scheduleTarget)) {
    return agendaPorAnimal(scheduleTarget);
  }
  return objetaoAo();
}

module.exports = getSchedule;
