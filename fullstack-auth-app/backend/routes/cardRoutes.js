const express = require("express");
const multer = require("multer");
const path = require("path");
const Card = require("../models/Card");

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// POST route to create a new card
router.post("/", upload.single("logo"), async (req, res) => {
  try {
    const { name, email, jobTitle, company, phone } = req.body;

    const newCard = new Card({
      name,
      email,
      jobTitle,
      company,
      phone,
      logo: req.file ? `/uploads/${req.file.filename}` : null, // Save image path
    });

    await newCard.save();
    res.json({ message: "Card saved successfully!", card: newCard });
  } catch (err) {
    console.error("Error saving card:", err);
    res.status(500).json({ error: "Error saving card" });
  }
});

// GET all cards (optional)
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: "Error fetching cards" });
  }
});

module.exports = router;
