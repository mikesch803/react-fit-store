import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    brand: "Max Protein",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kZPCV-vBTj9Awx44H97DeN5lpA45ykWTkw&usqp=CAU",
  },
  {
    _id: uuid(),
    brand: "My Protein",
    src: "https://cdn.labdoor.io/brand/images/7888b597-13ae-11eb-9dfd-06f7a2c059a3.jpg",
  },
  {
    _id: uuid(),
    brand: "Divine",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_v8E7HEIrtoeXVCRVkDXs0ODLWJjcwq-Cg&usqp=CAU",
  },
];
