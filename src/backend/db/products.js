import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0512/8827/7146/products/ChocoCreamy1_540x.png?v=1625906529",
    title: "Protein butter",
    brand: "Max Protein",
    mrp: 2000,
    offer_price:1500,
    rating:5,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://s1.thcdn.com/productimg/1600/1600/12939639-1354934872151238.jpg",
    title: "Protein Powder",
    brand: "My Protein",
    mrp: 1500,
    offer_price:899,
    rating:4.5,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://s1.thcdn.com/productimg/1600/1600/12665469-1374934887285875.jpg",
    title: "Protein Cookie",
    brand: "My Protein",
    mrp: 600,
    offer_price:299,
    rating:3.5,
    in_stock: true
  },
  {
    _id: uuid(),
    src: "https://s1.thcdn.com/productimg/1600/1600/12263806-5934791217777995.jpg",
    title: "Protein Pancake Mix",
    brand: "My Protein",
    mrp: 1300,
    offer_price:999,
    rating:1.5,
    in_stock: true,
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0441/1896/6440/products/PROPLANT_1024x1024@2x.png?v=1602249264",
    title: "Multi vitamin",
    brand: "Divine",
    mrp: 1300,
    offer_price:999,
    rating:2,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0512/8827/7146/products/Yogurt-Berry-02_ceb60cbf-beba-4b4e-b632-7fe57bae31e4.png?v=1639133605",
    title: "Protein Bar",
    brand: "Max Protein",
    mrp: 200,
    offer_price:99,
    rating:4,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0512/8827/7146/products/Peanut-Butter-02_6da7b51a-4745-42ba-954a-4f06f038b35c.png?v=1639132893",
    title: "Protein Bar",
    brand: "Max Protein",
    mrp: 300,
    offer_price:249,
    rating:3,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0512/8827/7146/products/Desi-Masala_3e8fcf32-ecdf-49c7-93e3-b251f91410e5.png?v=1611830606",
    title: "Protein Chips",
    brand: "Max Protein",
    mrp: 250,
    offer_price:89,
    rating:2.5,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0512/8827/7146/products/1_7d9c041c-64ca-4cc3-be7b-de638f8df3fa.jpg?v=1646401774",
    title: "Protein Cookie",
    brand: "Max Protein",
    mrp: 500,
    offer_price:499,
    rating:2,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0441/1896/6440/products/CHOCOLATE_1024x1024@2x.png?v=1602249858",
    title: "LIFE WHEY",
    brand: "Divine",
    mrp: 3000,
    offer_price:1500,
    rating:4,
    in_stock: true
  },
  {
    _id: uuid(),
    src: "https://cdn.shopify.com/s/files/1/0441/1896/6440/products/MANGO_331873f3-bb09-4c8a-a76a-d6d3be5257a6_720x.png?v=1602247608",
    title: "Mass gainer",
    brand: "Divine",
    mrp: 4999,
    offer_price:3000,
    rating:4,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0441/1896/6440/products/VITAL_1024x1024@2x.png?v=1602249441",
    title: "VITAL DETOX",
    brand: "Divine",
    mrp: 899,
    offer_price:494,
    rating:5,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://s1.thcdn.com/productimg/1600/1600/11654636-4084642668540291.jpg",
    title: "Peanut Butter",
    brand: "My Protein",
    mrp: 1000,
    offer_price:799,
    rating:3.5,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://s1.thcdn.com/productimg/1600/1600/12667263-2044934887380471.jpg",
    brand: "My Protein",
    title: "Protein Bar",
    mrp: 400,
    offer_price:299,
    rating:1.5,
    in_stock: true
  },
  {
    _id: uuid(),
    src:"https://cdn.shopify.com/s/files/1/0441/1896/6440/products/IMG-20210818-WA0010_1024x1024@2x.jpg?v=1629254217",
    title: "Protein Powder",
    brand: "Divine",
    mrp: 1049,
    offer_price:700,
    rating:5,
    in_stock: true
  },
  
];