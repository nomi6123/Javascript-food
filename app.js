const product = [
  {
    cake: "Rainbow Mixed Flavors",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special3.png",
    special: true,
  },

  {
    cake: "Sweet Couple Tiramisu",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special4.png",
    special: true,
  },
  {
    cake: "Mystery Rose Choco",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special2.png",
    special: true,
  },
  {
    cake: "Cheese Kingdom",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special1.png",
    special: true,
  },
  {
    cake: "Choco-Choco Dream",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special2.png",
    special: true,
  },
  {
    cake: "Pinky Cream Cherry Milk",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special1.png",
    special: true,
  },
  {
    cake: "Gummy Tosca Mixed Flavors",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special2.png",
    special: true,
  },
  {
    cake: "Gummy Tosca Mixed Flavors",
    Price: "12$",
    order: "ORDER THIS",
    img: "./IMG/special3.png",
    special: true,
  },

  // jnbkn;HTMLDataListElement;
  {
    cake: "Cornato Tosca Mixed Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (1).jpeg",
    special: true,
  },
  {
    cake: "cup icecreem With Salty Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (7).jpeg",
    special: false,
  },
  {
    cake: "Strawbeery With mix Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (1).jpeg",
    special: true,
  },
  {
    cake: "strawnerry banana Mixed Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (10).jpeg",
    special: true,
  },
  {
    cake: "Choclate orange Mixed Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (5).jpeg",
    special: false,
  },
  {
    cake: "Milk mango Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (4).jpeg",
    special: false,
  },
  ,
  {
    cake: "Milk apple Mixed Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (3).jpeg",
    special: false,
  },
  ,
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "15$",
    order: "ORDER THIS",
    img: "./iccrem img/icecreem png (7).jpeg",
    special: false,
  },
  // dvkjsbvbshldkjvnolaksnv

  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (1).jpeg",
    special: false,
  },
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (2).jpeg",

    special: false,
  },
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (3).jpeg",

    special: false,
  },
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (4).jpeg",

    special: true,
  },
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (5).jpeg",

    special: false,
  },
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (6).jpeg",

    special: true,
  },
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (7).jpeg",

    special: true,
  },
  {
    cake: "Milk sugar Mixed Flavors",
    Price: "18$",
    order: "ORDER THIS",
    img: "./choclate png//chocolate  (8).jpeg",

    special: true,
  },
];

const conel = document.querySelector(".cakes");
console.log(conel);

const iceEL = document.querySelector(".iccreem");
console.log(iceEL);

const ChocoEL = document.querySelector(".bread");
console.log(ChocoEL);

const filterproducts = product.filter((item) => {
  return item.Price == "12$";
});
const filterprice = product.filter((item) => {
  return item.Price == "15$";
});

const chocoprice = product.filter((item) => {
  return item.Price == "18$";
});

const products = filterproducts.map((item) => {
  console.log(item);
  return `
<main class="main">
    <div class="daba">
<img src="${item.img}" alt=""></div>
<p class="cake">${item.cake}</p>
<nav>${item.Price}</nav>
<button>${item.order}</button>
</main>
`;
});

const filterEl = filterprice.map((item) => {
  console.log(item);
  return `
<main class="main">
    <div class="daba">
<img src="${item.img}" alt=""></div>
<p class="cake">${item.cake}</p>
<nav>${item.Price}</nav>
<button>${item.order}</button>
</main>
`;
});

const filterchoco = chocoprice.map((item) => {
  console.log(item);
  return `
<main class="main">
    <div class="daba">
<img src="${item.img}" alt=""></div>
<p class="cake">${item.cake}</p>
<nav>${item.Price}</nav>
<button>${item.order}</button>
</main>
`;
});

console.log(products);
conel.innerHTML = products.join("");
iceEL.innerHTML = filterEl.join("");
ChocoEL.innerHTML = filterchoco.join("");
