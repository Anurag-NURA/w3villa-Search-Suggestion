import express from "express";

import {
  wordSearch,
  prefixSuggestion,
  addWord,
} from "../controllers/word.controller.js";

const router = express.Router();

router.get("/search", wordSearch);
router.get("/prefix", prefixSuggestion);
router.post("/add", addWord);

export default router;
