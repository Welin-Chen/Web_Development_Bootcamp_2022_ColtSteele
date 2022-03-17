const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => console.log("Mongo Connection open!"))
  .catch((err) => {
    console.log("On no Mongo Connection Error!");
    console.log(err);
  });

const userSchema = Schema({
  username: String,
  age: Number,
});

const tweetSchema = Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweet = async () => {
//   // const user = new User({ username: "user1", age: 60 });
//   const user = await User.findOne({ username: "user1" });
//   const tweet2 = new Tweet({ text: "bock bock bock", likes: 1239 });
//   tweet2.user = user;
//   // user.save();
//   tweet2.save();
// };

// makeTweet();

const findTweet = async () => {
  const t = await Tweet.find({}).populate("user");
  console.log(t);
};

findTweet();

// const findUserTweet = async () => {
//   const userTweet1 = await Tweet.find({}).find({
//     user: { _id: "62335bfc73324a7b068c0536" },
//   });
//   console.log(userTweet1);
// };

// findUserTweet();
