/**
 * Mock in-memory data for Slotify.
 * Each slot has: id, date, time, duration, isBooked.
 * No database yet — this array acts as the data store.
 */

const slots = [
  { id: 1, date: "2026-10-20", time: "09:00", duration: 30, isBooked: false },
  { id: 2, date: "2026-10-20", time: "09:30", duration: 30, isBooked: false },
  { id: 3, date: "2026-10-20", time: "10:00", duration: 60, isBooked: true },
  { id: 4, date: "2026-10-21", time: "14:00", duration: 30, isBooked: false },
  { id: 5, date: "2026-10-21", time: "15:30", duration: 45, isBooked: false },
];

module.exports = { slots };
