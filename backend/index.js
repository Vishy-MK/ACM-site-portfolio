const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = "";
mongoose
  .connect(MONGO_URI, { dbName: "announcements" })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const JWT_SECRET = "CHANGE_ME";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "";
const announcementSchema = new mongoose.Schema({
  title: String,
  date: String,
  type: String,
  body: String,
});
const Announcement = mongoose.model(
  "dummy_Announcements",
  announcementSchema,
  "dummy_Announcements"
);

let ADMIN_PASSWORD_HASH;
(async () => {
  if (ADMIN_PASSWORD) {
    ADMIN_PASSWORD_HASH = await bcrypt.hash(ADMIN_PASSWORD, 10);
  }
})();

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.post("/admin-login", async (req, res) => {
  const { username, password } = req.body;

  if (
    username === ADMIN_USERNAME &&
    ADMIN_PASSWORD_HASH &&
    (await bcrypt.compare(password, ADMIN_PASSWORD_HASH))
  ) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ message: "Login successful", token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.get("/admin-dashboard", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.status(200).json({ message: `Welcome, ${decoded.username}` });
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
});

app.get("/announcements", async (req, res) => {
  try {
    const data = await Announcement.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching announcements" });
  }
});

app.post("/announcements/create", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied, no token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.username !== ADMIN_USERNAME) {
      return res.status(403).json({ message: "Access denied, invalid user" });
    }
    const newAnn = new Announcement({
      title: req.body.title,
      date: req.body.date,
      type: req.body.type,
      body: req.body.body,
    });
    await newAnn.save();
    res.status(201).json({ message: "Announcement created successfully" });
  } catch (err) {
    console.error("Error creating announcement:", err);
    res.status(403).json({ error: "Invalid or expired token" });
  }
});

app.delete("/announcements/delete", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied, no token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.username !== ADMIN_USERNAME) {
      return res.status(403).json({ message: "Access denied, invalid user" });
    }
    const { id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid announcement ID" });
    }

    const result = await Announcement.findByIdAndDelete(id);
    if (result) {
      res.json({ message: "Announcement deleted successfully" });
    } else {
      res.status(404).json({ error: "Announcement not found" });
    }
  } catch (err) {
    console.error("Error deleting announcement:", err);
    res.status(500).json({ error: "Error deleting announcement" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Running.");
});
