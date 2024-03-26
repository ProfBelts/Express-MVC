const express = require("express");
const { index, results } = require("../controllers/feedbackController");

const router = express.Router();

router.get("/", index);
router.post("/results", results);

module.exports = router;
