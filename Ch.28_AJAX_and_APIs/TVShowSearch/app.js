const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  console.log(searchTerm);

  const config = { params: { q: searchTerm, isFunny: "colt" } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
  console.log(typeof res);
  console.log(res.data);
  makeImages(res.data);
});

const clearImages = () => {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    img.remove();
  }
};

const makeImages = (shows) => {
  clearImages();
  for (let result of shows) {
    const img = document.createElement("img");
    if (result.show.image !== null) {
      img.src = result.show.image.medium;
      console.log(result.show.image.medium);
      document.body.append(img);
    }
  }
};
