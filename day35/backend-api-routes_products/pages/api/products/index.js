import { getAllProducts } from "../../../services/productServices";

//handler function for getAllProducts

export default async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
