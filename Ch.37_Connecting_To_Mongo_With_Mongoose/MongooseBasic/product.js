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

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

// productSchema.methods.greet = function () {
//   console.log("hello, instance methon");
//   console.log(`- from ${this.name}`);
// };

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const findProduct = await Product.findOne({ name: "Mountian Bike" });
  console.log(findProduct);
  await findProduct.toggleOnSale();
  console.log(findProduct);
  await findProduct.addCategory("Outdoors");
  console.log(findProduct);
};

Product.fireSale().then((res) => console.log(res));

findProduct();

// const bike = new Product({
//   name: "Cycling Jersey",
//   price: 28.5,
//   categories: ["Cycling"],
//   size: "L",
// });
// bike
//   .save()
//   .then((data) => {
//     console.log("It worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh No, error!");
//     console.log(err);
//   });

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: -100 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("It worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh No, error!");
//     console.log(err);
//   });
