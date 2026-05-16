# Node.js Docker Compose Project

This is a simple Node.js project using Express and Docker Compose with multiple environments (development, test, production).

## Technologies Used
- Node.js
- Express
- Docker
- Docker Compose

## How to Run

### Production
docker compose -f docker-compose.yml -f docker-compose-prod.yml up --build

### Development
docker compose -f docker-compose.yml -f docker-compose-dev.yml up --build

### Test
docker compose -f docker-compose.yml -f docker-compose-test.yml up --build

## Access the App
Development: http://localhost:4000  
Test: http://localhost:5000  
Production: http://localhost:3000  

## Project Idea
This is a simple Express server that returns a message when accessing the root route.

## Example Code
app.get("/", (req, res) => {
    res.send("Hello from Node.js");
});

## Notes
Each environment has its own Docker Compose configuration with different ports and settings.
