# Slotify

Slotify — a slot-based booking system REST API built with Node.js and Express.js.
This is the Week 1 deliverable of the CodGen Backend Internship.

## Stack

- Node.js
- Express.js

## Project Structure

```
slotify/
├── index.js            # Entry point — Express server (port 3000)
├── package.json        # Node project metadata & scripts
├── .gitignore          # Ignores node_modules and logs
├── data/
│   └── slots.js        # In-memory mock slot data
├── controllers/
│   └── slotController.js  # Route handler logic
└── routes/
    └── slotRoutes.js   # REST route definitions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the server
npm start
# or: node index.js

Server runs on http://localhost:3000
```

## API Routes

| Method | Route | Description | Status |
|--------|-------|-------------|--------|
| GET | `/` | Welcome message | 200 |
| GET | `/slots` | List all slots | 200 |
| GET | `/slots/:id` | Get a single slot | 200 / 404 |
| POST | `/slots` | Create a new slot | 201 / 400 |
| DELETE | `/slots/:id` | Remove a slot | 200 / 404 |

### Slot object

```json
{
  "id": 1,
  "date": "2026-10-20",
  "time": "09:00",
  "duration": 30,
  "isBooked": false
}
```

### POST /slots body

```json
{
  "date": "2026-10-22",
  "time": "11:00",
  "duration": 30
}
```

## Middleware

- `express.json()` — parses incoming JSON request bodies
- Custom request logger — prints method and URL of every request to the console

## Testing

All routes verified manually with correct status codes:
- `200` — successful GET / DELETE
- `201` — successful POST (created)
- `400` — POST with missing required fields
- `404` — slot not found or undefined route

## License

ISC
