// // factory function(make object)
// function makeColor(r, g, b) {
//   const color = {};

//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };

//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(132, 111, 58);

// const black = makeColor(0, 0, 0);

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};

const color1 = new Color(40, 250, 60);
const color2 = new Color(0, 0, 0);

// rgb(40,250,60)

Array.prototype.pop = function () {
  console.log("test");
};