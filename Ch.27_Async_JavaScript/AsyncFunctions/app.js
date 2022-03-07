// async function hello() {}

// const sing = async () => {
//   return "la la la";
//   throw "oh no, problem";
// };

// sing()
//   .then((data) => {
//     console.log("Promise Resolved with: ", data);
//   })
//   .catch((err) => {
//     console.log("Oh no, Promise Rejected");
//     console.log(err);
//   });

// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Credentails";
//   if (password === "corgifeetarecute") return "welcome";
//   throw "Invalid Password";
// };

// login("siofdi", "corgifeetarecute")
//   .then((msg) => {
//     console.log("Logged in!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  // throw Error("oh no, error");
  return "All done!";
}

// rainbow()
//   .then(() => console.log("End of rainbow"))
//   .catch((err) => console.log(err));

async function printRainbow() {
  await rainbow();
  console.log("End of rainbow");
}

// printRainbow();

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("connection timeout");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("Catch an Error");
    console.log(e);
  }
}
