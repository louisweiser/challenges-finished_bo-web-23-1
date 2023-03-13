import dbConnect from "../../../db/connect.js";
import Product from "../../../db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find({});
    response.status(200).json(products);
  } else {
    response.status(404).json({ status: "Not Found" });
  }
}
