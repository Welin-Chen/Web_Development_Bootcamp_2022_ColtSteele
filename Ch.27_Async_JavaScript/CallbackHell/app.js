// function rainbow(newColor, delay) {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     if (i < color.length) {
//       rainbow(color[i], delay);
//       console.log(i, color[i]);
//       i++;
//     }
//   }, delay);
// }

// let i = 0;
// let delay = 1000;
// const color = ["red", "orange", "yellow", "green", "blue", "violet"];
// rainbow(color[i], delay);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
    console.log(typeof doNext, doNext);
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {
        delayedColorChange("blue", 1000, () => {});
      });
    });
  });
});

searchMoviesAPI(
  "amadeus",
  () => {
    saveToMyDB(
      movies,
      () => {
        // if it works, run this:
      },
      () => {
        // if it doesn't work, run this"
      }
    );
  },
  () => {
    // if API is down, or request failed
  }
);
