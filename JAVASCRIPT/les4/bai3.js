const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};
const nameScore = function (name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        total += scores[char.toUpperCase()];
    }
      if (total <= 60) {
        console.log("NOT TOO GOOD");
      } else if (61 <= total) {
        console.log("PRETTY GOOD");
      } else if (301 <= total) {
        console.log(" VERY GOOD");
      } else if (total >= 600) {
        console.log("NOT TOO GOOD");
      }
};

nameScore("MUBASHIR");








