import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";

const heroData = [
  {
    id: 1,
    name: "Icecream",
    desc: "Chocolate & Vanilla",
    price: "5.3",
    img: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    desc: "Fresh Strawberry",
    price: "7.2",
    img: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    desc: "Mixed Kebab Plate",
    price: "16.1",
    img: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    desc: "Mixed Fished Kebab",
    price: "12.4",
    img: Fi1,
  },
];

const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecream",
    urlParamName: "icecream",
  },
  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];

export { heroData, categories };
