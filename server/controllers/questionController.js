import Question from "../models/questionModel.js";


export const addQuestion = async (req, res) => {

  try {

    const {
      testId,
      question,
      options,
      correctAnswer,
      type,
    } = req.body;

    const newQuestion = await Question.create({
      testId,
      question,
      options,
      correctAnswer,
      type,
    });

    res.status(201).json({
      success: true,
      message: "Question added successfully",
      question: newQuestion,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// GET QUESTIONS BY TEST

export const getQuestionsByTest = async (req, res) => {

  try {

    const { testId } = req.params;

    const questions = await Question.find({ testId });

    res.status(200).json({
      success: true,
      questions,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};