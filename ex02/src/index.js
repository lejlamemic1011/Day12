function myCounter(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = myCounter(n - 1);

    countArray.push(n);

    return countArray;
  }
}
console.log(myCounter(-1).reverse());
console.log(myCounter(10).reverse());
console.log(myCounter(5).reverse());

module.exports = myCounter;