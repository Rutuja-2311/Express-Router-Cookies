const express = require("express");
const router = express.Router();

//Index 
router.get("/", (req, res) => {
  res.send("GETfor posts");
});

//Show 
router.get("/:id", (req, res) => {
  res.send("GET for postid");
});

//POST 
router.post("/", (req, res) => {
  res.send("POST for posts");
});

//Delete 
router.delete("/:id", (req, res) => {
  res.send("DELETE for post id");
});

module.exports = router;