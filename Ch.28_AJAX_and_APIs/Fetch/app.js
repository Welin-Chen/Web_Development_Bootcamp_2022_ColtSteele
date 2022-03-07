// fetch("https://swapai.dev/api/people/1")
//   .then((res) => {
//     console.log("Response, waiting to parse... ", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data parsed... ", data);
//     console.log(data.name);
//   })
//   .catch((e) => console.log("Error: ", e));

const fetchName = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data.name);
  } catch (e) {
    console.log("Error", e);
  }
};
