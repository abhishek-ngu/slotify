/**
 * Slot routes — defines the REST endpoints for slots.
 * Route handlers live in controllers/slotController.js.
 */

const express = require("express");
const router = express.Router();

const {
  getAllSlots,
  getSlotById,
  createSlot,
  deleteSlot,
} = require("../controllers/slotController");

// GET /slots — list all slots
router.get("/", getAllSlots);

// GET /slots/:id — get a single slot by id
router.get("/:id", getSlotById);

// POST /slots — create a new slot
router.post("/", createSlot);

// DELETE /slots/:id — remove a slot by id
router.delete("/:id", deleteSlot);

module.exports = router;
