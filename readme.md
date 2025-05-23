# basic-crud-express

A simple Express.js CRUD API for managing drug data.

## Features

- Add a drug
- Get all drugs
- Get a drug by ID
- Update a drug by ID
- Delete a drug by ID

## Tech Stack

- Node.js
- Express.js

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/vaibhav108d/basic-crud-express.git
cd basic-crud-express
npm install
```

### Run the Project

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Add a Drug

```http
POST /drugs
Content-Type: application/json

{
  "name": "Paracetamol",
  "price": 20
}
```

### Get All Drugs

```http
GET /drugs
```

### Get a Drug by ID

```http
GET /drugs/:id
```

### Update a Drug by ID

```http
PUT /drugs/:id
Content-Type: application/json

{
  "name": "Ibuprofen",
  "price": 30
}
```

### Delete a Drug by ID

```http
DELETE /drugs/:id
```

## Notes

- All data is stored in memory and will reset on server restart.
- This project is for learning purposes.

## Acknowledgements

- Thanks to **Hitesh Choudhary** for his amazing Express.js tutorials that helped in building this project.

## License

MIT
