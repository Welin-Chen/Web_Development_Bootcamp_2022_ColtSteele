const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};

const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

const cat = {
  name: "Blue Steel",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`this is:`, this);
    console.log(`${this.name} says MEOW`);
  },
};

const meow2 = cat.meow;

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};
