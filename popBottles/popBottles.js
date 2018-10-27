const input = process.argv.slice(2);
function popBottles(investment) {
  var bottles = investment / 2;
  var caps = investment / 2;
  var bottlesCount = 0;
  var capsCount = 0;
  var totalBottles = investment / 2;
  var i = 0;
  do {
      // console.log( 'Iteration: ' + i);
      // console.log('------------------------------------')
    if (bottles % 2 === 0) {
      bottles = bottles / 2;
      totalBottles += bottles;
      caps += bottles;
      bottlesCount += bottles;

      // console.log(`Bottles: ${bottles}`);
      // console.log(`Caps: ${caps} `);
      // console.log(`Total: ${totalBottles} \n`);
    } else if (bottles % 2 !== 0) {

      bottles = Math.floor(bottles / 2);
      totalBottles += bottles;
      caps += bottles;
      bottlesCount += bottles;
      bottles = bottles + 1;

      // console.log(`Bottles: ${bottles}`);
      // console.log(`Caps: ${caps}`);
      // console.log(`Total: ${totalBottles} \n`);
    }
    if (caps % 4 === 0) {
      caps = caps / 4;
      totalBottles += caps;
      bottles += caps;
      capsCount += caps;

      // console.log(`Bottles: ${bottles}`);
      // console.log(`Caps: ${caps} `);
      // console.log(`Total: ${totalBottles} \n`);
    } else if (caps % 4 !== 0 && caps > 3) {
      var temp = caps % 4;
      caps = Math.floor(caps / 4);
      totalBottles += caps;
      bottles += caps;
      capsCount += caps;
      caps = caps + temp;

      // console.log(`Bottles: ${bottles}`);
      // console.log(`Caps: ${caps} `);
      // console.log(`Total: ${totalBottles} \n`);
    }
    i++;
  } while (bottles > 1);
  console.log(`Total Bottles: ${totalBottles}`);
  console.log(`Remaining Bottles: ${bottles}`);
  console.log(`Remaining Caps: ${caps}`);
  console.log(`Total Earned: `);
  console.log(`Bottles: ${bottlesCount}`);
  console.log(`Caps: ${capsCount} `);

  return totalBottles;
}

popBottles(input);
