const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

const todoAnimal = () => {
  const animalReduce = species.reduce((acc, currAnimal) => {
    const { name, residents } = currAnimal;
    acc[name] = residents.length;
    return acc;
  }, {});
  return animalReduce;
};

// function filterAnimal(para1) {
//   const value = Object.values(para1);
//   console.log(value);
//   const arrayFind = species.find((currAnimal) => currAnimal.name === value[0]);
//   console.log(arrayFind);
//   const arrayMap = arrayFind.reduce((acc, currAnimal) => {
//     acc = currAnimal.residents.length;
//     return acc;
//   }, 0);
//   console.log(arrayMap);
//   return arrayMap;
// }

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return todoAnimal();
  }
}

module.exports = countAnimals;
