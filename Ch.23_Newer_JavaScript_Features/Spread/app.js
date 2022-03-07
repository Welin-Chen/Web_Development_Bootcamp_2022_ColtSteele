// const dogs = ["dog1", "dog2", "dog3"];
// const cats = ["cat1", "cat2"];

// const allPets = [...cats, ...dogs, "test"];

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine };

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "fhdsuifhs",
  username: "tjio",
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
