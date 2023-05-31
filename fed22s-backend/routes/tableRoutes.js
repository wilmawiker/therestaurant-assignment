const express = require("express");
const router = express.Router();
const {
  getTableById,
  getAllTables,
} = require("../controllers/tableController");

router.get("/:tableId", getTableById);
router.get("/", getAllTables);

module.exports = router;
