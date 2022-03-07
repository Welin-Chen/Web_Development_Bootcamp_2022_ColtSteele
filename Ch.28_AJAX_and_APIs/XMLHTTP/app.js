const req = new XMLHttpRequest();

req.onload = function () {
  console.log("All done with request!");
  console.log(this);
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
};

req.onerror = function () {
  console.log("Error");
  console.log(this);
};

req.open("get", "https://swapi.dev/api/people/1");

// req.open(
//   "get",
//   "https://api.currencylayer.com/live? access_key = YOUR_ACCESS_KEY"
// );

req.send();
