function popBottles(investment) {
  var bottles = investment / 2;
  var caps = investment / 2;
  var totalBottles = investment / 2;
  do {
    if (bottles % 2 === 0) {
      bottles = bottles / 2;
      totalBottles += bottles;
      caps += bottles;
      //console.log(totalBottles);
    } else {
      //console.log('in');
      bottles = (bottles - 1) / 2;
      totalBottles += bottles;
      caps += bottles;
      bottles = bottles + 1;
    }
    if (caps % 4 === 0) {
      caps = caps / 4;
      totalBottles += caps;
      bottles += caps;
    } else {
      var temp = caps % 4;
      caps = Math.floor(caps / 4);
      totalBottles += caps;
      bottles += caps;
      caps = caps + temp;
    }
    console.log(`Bottles: ${bottles}`);
    console.log(`Caps: ${caps}`);
  } while (bottles > 1 && caps > 3);
  return totalBottles;
}
/*

10 > 5 > 2 + 1
10 > 2 + 2

*/

console.log(popBottles(10));
