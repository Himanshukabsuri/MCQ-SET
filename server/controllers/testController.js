import Test from "../models/testModel.js";

export const createTest = async (req, res) => {

  try {

    const { title, description, duration } = req.body;

    const test = await Test.create({
      title,
      description,
      duration,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Test created successfully",
      test,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// GET ALL TESTS

export const getAllTests = async (req, res) => {

  try {

    const tests = await Test.find()
      .populate("createdBy", "name email");

    res.status(200).json({
      success: true,
      tests,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};