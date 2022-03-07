// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log(res);
//     console.log(res.data);
//     console.log(res.data.name);
//   })
//   .catch((e) => console.log("Error:", e));

const fetchName = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data.name);
  } catch (e) {
    console.log("Error:", e);
  }
};

const jokes = document.querySelector("#jokes");

const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  jokes.append(newLi);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes available!";
  }
};

button.addEventListener("click", addNewJoke);
