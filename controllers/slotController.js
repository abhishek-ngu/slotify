/**
 * Slot controller — handles the business logic for slot routes.
 * Data lives in data/slots.js (in-memory mock store).
 */

const { slots } = require("../data/slots");

/**
 * GET /slots — list all slots
 */
const getAllSlots = (req, res) => {
  res.status(200).json({
    success: true,
    count: slots.length,
    data: slots,
  });
};

/**
 * GET /slots/:id — get a single slot by id
 */
const getSlotById = (req, res) => {
  const slot = slots.find((s) => s.id === parseInt(req.params.id, 10));

  if (!slot) {
    return res.status(404).json({
      success: false,
      message: `Slot with id ${req.params.id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: slot,
  });
};

/**
 * POST /slots — create a new slot
 * Body must include: date, time, duration (isBooked defaults to false)
 */
const createSlot = (req, res) => {
  const { date, time, duration } = req.body;

  // Validate required fields
  if (!date || !time || !duration) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: date, time, and duration are required",
    });
  }

  const newSlot = {
    id: slots.length > 0 ? Math.max(...slots.map((s) => s.id)) + 1 : 1,
    date,
    time,
    duration: Number(duration),
    isBooked: false,
  };

  slots.push(newSlot);

  res.status(201).json({
    success: true,
    message: "Slot created successfully",
    data: newSlot,
  });
};

/**
 * DELETE /slots/:id — remove a slot by id
 */
const deleteSlot = (req, res) => {
  const slotIndex = slots.findIndex((s) => s.id === parseInt(req.params.id, 10));

  if (slotIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Slot with id ${req.params.id} not found`,
    });
  }

  const deletedSlot = slots.splice(slotIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: `Slot with id ${req.params.id} deleted successfully`,
    data: deletedSlot,
  });
};

module.exports = {
  getAllSlots,
  getSlotById,
  createSlot,
  deleteSlot,
};
