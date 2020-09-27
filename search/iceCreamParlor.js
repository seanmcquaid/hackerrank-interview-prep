function whatFlavors(cost = [], money = 0) {
  let indexOfCosts = {};

  for (let i = 0; i < cost.length; i++) {
    indexOfCosts[cost[i]] = indexOfCosts[cost[i]]
      ? [...indexOfCosts[cost[i]], i]
      : [i];
    const targetAmount = money - cost[i];
    if (indexOfCosts[targetAmount]) {
      if (cost[i] === targetAmount && indexOfCosts[targetAmount].length > 1) {
        console.log(
          `${indexOfCosts[targetAmount][0] + 1} ${
            indexOfCosts[targetAmount][1] + 1
          }`
        );
        return;
      } else if (cost[i] !== targetAmount) {
        console.log(`${indexOfCosts[targetAmount][0] + 1} ${i + 1}`);
        return;
      }
    }
  }
}

const cost = [2, 2, 4, 3];
const money = 4;

console.log(whatFlavors(cost, money));
