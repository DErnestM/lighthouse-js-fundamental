const calculateChange = function(total, cash) {

  let change = cash - total;
  const denominations = {};
  
  // Calculate the number of twenty dollar bills to give back
  while (change >= 2000) {
    if (denominations.twentyDollar) {
      denominations.twentyDollar++;
    } else {
      denominations.twentyDollar = 1;
    }
    change -= 2000;
  }
  
  // Calculate the number of ten dollar bills to give back
  while (change >= 1000) {
    if (denominations.tenDollar) {
      denominations.tenDollar++;
    } else {
      denominations.tenDollar = 1;
    }
    change -= 1000;
  }
  
  // Calculate the number of five dollar bills to give back
  while (change >= 500) {
    if (denominations.fiveDollar) {
      denominations.fiveDollar++;
    } else {
      denominations.fiveDollar = 1;
    }
    change -= 500;
  }
  
  // Calculate the number of two dollar bills to give back
  while (change >= 200) {
    if (denominations.twoDollar) {
      denominations.twoDollar++;
    } else {
      denominations.twoDollar = 1;
    }
    change -= 200;
  }
  
  // Calculate the number of one dollar bills to give back
  while (change >= 100) {
    if (denominations.oneDollar) {
      denominations.oneDollar++;
    } else {
      denominations.oneDollar = 1;
    }
    change -= 100;
  }
  
  // Calculate the number of quarters to give back
  while (change >= 25) {
    if (denominations.quarter) {
      denominations.quarter++;
    } else {
      denominations.quarter = 1;
    }
    change -= 25;
  }
  
  // Calculate the number of dimes to give back
  while (change >= 10) {
    if (denominations.dime) {
      denominations.dime++;
    } else {
      denominations.dime = 1;
    }
    change -= 10;
  }
  
  // Calculate the number of nickels to give back
  while (change >= 5) {
    if (denominations.nickel) {
      denominations.nickel++;
    } else {
      denominations.nickel = 1;
    }
    change -= 5;
  }
  
  // Calculate the number of pennies to give back
  while (change >= 1) {
    if (denominations.penny) {
      denominations.penny++;
    } else {
      denominations.penny = 1;
    }
    change -= 1;
  }
  
  return denominations;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));