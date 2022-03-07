const form = document.querySelector("#tweetForm");
const tweets = document.querySelector("#tweets");
form.addEventListener("submit", function (e) {
  console.log("submit");
  e.preventDefault();
  // const userName = document.querySelectorAll("input")[0].value;
  // const tweet = document.querySelectorAll("input")[1].value;
  const username = form.elements.username;
  const tweet = form.elements.tweet;
  if (username.value !== "" && tweet.value !== "") {
    addTweet(username.value, tweet.value);
  }
  username.value = "";
  tweet.value = "";
});

const addTweet = (username, tweet) => {
  const newLi = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newLi.append(bTag);
  newLi.append(` - ${tweet}`);
  tweets.append(newLi);
};
