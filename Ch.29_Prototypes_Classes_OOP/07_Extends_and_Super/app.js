class Pet {
  constructor(name, age) {
    console.log("In Pet constructor");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("In Cat constructor");
    super(name, age);
    this.livesLeft = livesLeft;
  }

  moew() {
    return "Moew~~~";
  }
}

class Dog extends Pet {
  bark() {
    return "Wof~~~";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}
