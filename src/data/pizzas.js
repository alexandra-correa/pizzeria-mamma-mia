export const pizzas = [
  {
    id: "napolitana",
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "espanola",
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "margherita",
    name: "Margherita",
    price: 5990,
    ingredients: ["mozzarella", "tomate", "albahaca"],
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vegetariana",
    name: "Vegetariana",
    price: 6490,
    ingredients: ["mozzarella", "champiñones", "pimentón", "aceitunas"],
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hawaiana",
    name: "Hawaiana",
    price: 6790,
    ingredients: ["mozzarella", "jamón", "piña", "salsa de tomate"],
    img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=800&q=80",
  },
];

export const pizzaCart = [
  { ...pizzas[0], quantity: 2 },
  { ...pizzas[2], quantity: 1 },
  { ...pizzas[1], quantity: 1 },
];
