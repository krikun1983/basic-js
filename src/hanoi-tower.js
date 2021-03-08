const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //diskNumber - количество дисков
  //turnsSpeed -скорость их перемещения
  // turns  -ходов перемещения
  //seconds -из секунд

  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(turns / turnsSpeed * 3600);

  return { turns, seconds };
};
