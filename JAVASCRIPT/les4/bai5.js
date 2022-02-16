const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
};
function totalAmountLost(obj) {
  let sum = 0;
  for (let i in obj) {
      sum += obj[i];
  }
  if (sum == 0) {
    console.log("Lucky You!");
  } else {
    console.log(sum);
  }
}
totalAmountLost(stolenItems);
