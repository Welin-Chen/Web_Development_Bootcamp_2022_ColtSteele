const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => console.log("Mongo Connection open!"))
  .catch((err) => {
    console.log("On no Mongo Connection Error!");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    first: "Harry",
    last: "Porter",
  });
  u.addresses.push({
    street: "123 St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "99 3rd St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await user.save();
  console.log(res);
};

addAddress("6232e429c95406d26aa9c990");
// makeUser();
