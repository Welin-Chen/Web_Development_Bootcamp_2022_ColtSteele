const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Mongo database connection open!");
  })
  .catch((err) => {
    console.log("Mong database connection error!");
  });

// const p = new Product({
//   name: "Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: "Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Celery",
    price: 1.52,
    category: "vegetable",
  },
  {
    name: "Milk",
    price: 2.68,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
