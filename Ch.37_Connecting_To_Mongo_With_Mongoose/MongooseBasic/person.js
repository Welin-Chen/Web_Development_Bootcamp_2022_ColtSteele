const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("connect open!!!");
  })
  .catch((err) => {
    console.log("Oh no, error");
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema
  .virtual("fullName")
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (v) {
    this.first = v.substr(0, v.indexOf(" "));
    this.last = v.substr(v.indexOf(" ") + 1);
  });

personSchema.pre("save", async function () {
  this.first = "Yo";
  this.last = "MAMA";
  console.log("about to save!!!");
});

personSchema.post("save", async function () {
  console.log("just save!!!");
});

const Person = mongoose.model("Person", personSchema);

const chen = Person({ first: "Chen", last: "Wei Lin" });
