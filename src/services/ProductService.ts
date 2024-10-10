// const API_URL = "data/data.json";

// const getProduct = async () => {
//     const response = await fetch(API_URL)
//     return response.json()
// }

export const getProduct = () => {
  return [
    {
      name: "Smartphone",
      price: "$499.99",
      description: "A high-end smartphone with a great camera.",
      category: "Electronics",
    },
    {
      name: "Jeans",
      price: "$59.99",
      description: "Comfortable denim jeans in multiple sizes.",
      category: "Clothing",
    },
    {
      name: "Headphones",
      price: "$199.99",
      description: "Noise-cancelling wireless headphones.",
      category: "Electronics",
    },
    {
      name: "T-Shirt",
      price: "$19.99",
      description: "A casual t-shirt in various colors.",
      category: "Clothing",
    },
    {
      name: "Wristwatch",
      price: "$89.99",
      description: "Stylish wristwatch with a leather band.",
      category: "Accessories",
    },
    {
      name: "Headset",
      price: "$199.99",
      description: "Noise-cancelling wireless headphones.",
      category: "Electronics",
    },
    {
      name: "V-Shirt",
      price: "$19.99",
      description: "A casual t-shirt in various colors.",
      category: "Clothing",
    },
    {
      name: "Watch",
      price: "$189.99",
      description: "Stylish wristwatch with a leather band.",
      category: "Accessories",
    },
  ];
};

// const ProductService = {
//   getProduct,
// };
// export default ProductService;
