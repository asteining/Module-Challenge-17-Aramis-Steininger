# Social Network API

## Description
This project is a social network API built with Express.js, MongoDB, and Mongoose. It allows users to share their thoughts, react to friends' thoughts, and create a friend list.

## Features
- Create, read, update, and delete users
- Create, read, update, and delete thoughts
- Add and remove reactions to thoughts
- Add and remove friends from a user's friend list

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
Navigate into the project directory:
bash
Copy
cd social-network-api
Install dependencies:
bash
Copy
npm install
Start the server:
bash
Copy
npm start
The server will run on port 3001 by default.
API Endpoints
Users
GET /api/users - Get all users
GET /api/users/:userId - Get a single user by ID (populated with thoughts and friends)
POST /api/users - Create a new user
PUT /api/users/:userId - Update a user by ID
DELETE /api/users/:userId - Delete a user by ID (and associated thoughts)
POST /api/users/:userId/friends/:friendId - Add a friend
DELETE /api/users/:userId/friends/:friendId - Remove a friend
Thoughts
GET /api/thoughts - Get all thoughts
GET /api/thoughts/:thoughtId - Get a single thought by ID
POST /api/thoughts - Create a new thought (and add its _id to the associated user's thoughts array)
PUT /api/thoughts/:thoughtId - Update a thought by ID
DELETE /api/thoughts/:thoughtId - Delete a thought by ID
POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought
Walkthrough Video
[Insert link to your walkthrough video here]

License
MIT License