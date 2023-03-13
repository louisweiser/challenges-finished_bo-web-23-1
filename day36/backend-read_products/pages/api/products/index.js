import dbConnect from "../../../db/connect.js";
import Product from "../../../db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect(); // wait for the database connection to be established

  if (request.method === "GET") {
    try {
      const products = await Product.find(); // retrieve all products from the database
      return response.status(200).json(products); // return the products as a response
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return response.status(405).json({ message: "Method Not Allowed" });
  }
}
