import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
    },

    correctAnswer: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["manual", "ai"],
      default: "manual",
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;