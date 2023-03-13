import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review; //entscheident für den vercell host
