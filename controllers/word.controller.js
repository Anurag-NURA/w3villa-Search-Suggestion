import { database, frequency } from "../DB.js";

import { suggestedWords } from "../utils/search.js";

export const wordSearch = async (req, res) => {
  let { word } = req.query;
  console.log(word);

  //checking for empty strings
  if (!word || word.trim() === "") {
    res.status(400).json({
      message: "Don't enter empty string",
    });
  }

  //basically just increase the count of the word by 1
  if (frequency.has(word)) {
    const prevFrequency = frequency.get(word);
    frequency.set(word, prevFrequency + 1);

    res.status(200).json({
      message: "FOUND",
    });
  } else {
    res.status(400).json({
      message: "NOT FOUND",
    });
  }
};

export const prefixSuggestion = (req, res) => {
  let { word } = req.query;
  console.log(word);

  let response = [];

  response = suggestedWords(word, database);

  if (response.length === 0) {
    res.status(404).json({
      message: "NOT FOUND",
    });
  } else {
    res.status(200).json({
      message: "FOUND",
      data: response,
    });
  }
};

export const addWord = async (req, res) => {
  const { word } = req.body;
  console.log(word);

  //first check if the word already exists in the db
  if (frequency.has(word)) {
    res.status(200).json({
      message: "ALREADY EXISTS",
    });
  } else {
    database.push(word);
    frequency.set(word, 1);
    res.status(200).json({
      message: "Word addded successfully",
    });
  }
};
