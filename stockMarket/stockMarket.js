function maxProfit(...args) {
  var profit = 0;
  for (var i = 0; i < args.length; i++) {
    for (var j = i + 1; j < args.length; j++) {
      if (profit > args[i] - args[j]) {
        profit = args[i] - args[j];
      }
    }
  }
  if (profit === 0) {
    return -1;
  }
  return Math.abs(profit);
}

console.log(maxProfit(45, 24, 35, 31, 40, 38, 11));

