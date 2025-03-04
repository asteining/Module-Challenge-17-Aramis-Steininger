# Social Network API

This project is a backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage their friend lists. It is built using Node.js, Express, MongoDB, and Mongoose—with TypeScript for improved type safety. The API supports full CRUD (Create, Read, Update, Delete) operations on Users and Thoughts, including nested Reactions for Thoughts.

## Table of Contents

- [Features](#features)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Links](#links)

## Features

- **User Management:** Create, update, delete, and retrieve users with unique usernames and valid emails.
- **Thought Management:** Create, update, delete, and retrieve thoughts posted by users.
- **Virtuals:** The Thought model includes a virtual (`reactionCount`) to get the number of reactions.
- **Database Seeding:** A seed script generates random user and thought data for testing and development.
- **Bonus Feature:** Automatically deletes a user’s associated thoughts when that user is removed.
- **TypeScript:** Built with TypeScript for improved code quality and maintainability.


## Testing the API:

Use Insomnia, Postman, or your preferred API testing tool to interact with the API endpoints. For example:

GET /api/users to retrieve all users.
POST /api/users to create a new user.
GET /api/thoughts to retrieve all thoughts.
POST /api/thoughts to create a new thought (remember to include the associated user ID in the request body).
And additional endpoints for updating, deleting, adding friends, and reactions.

## API Routes
- Users
- GET /api/users
- Retrieve all users with their associated thoughts and friends.

- GET /api/users/:userId
- Retrieve a single user by ID.

- POST /api/users
- Create a new user.

- PUT /api/users/:userId
- Update an existing user by ID.

- DELETE /api/users/:userId
- Delete a user by ID (and associated thoughts).

- POST /api/users/:userId/friends/:friendId
- Add a friend to a user’s friend list.

- DELETE /api/users/:userId/friends/:friendId
- Remove a friend from a user’s friend list.

- Thoughts
- GET /api/thoughts
- Retrieve all thoughts.

- GET /api/thoughts/:thoughtId
- Retrieve a single thought by ID.

- POST /api/thoughts
Create a new thought. (Ensure to include userId in the request body so the thought can be associated with a user.)

- PUT /api/thoughts/:thoughtId
- Update an existing thought.

- DELETE /api/thoughts/:thoughtId
- Delete a thought by ID.

- POST /api/thoughts/:thoughtId/reactions
- Add a reaction to a thought.

- DELETE /api/thoughts/:thoughtId/reactions/:reactionId
- Remove a reaction from a thought.

## Walkthrough Videos
- https://app.screencastify.com/v3/watch/xNB5aEZHvPTP7w0LqTOI
- https://app.screencastify.com/v3/watch/IxLIouJDWeDIp4ZEME6t




## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Links
- https://github.com/asteining/Module-Challenge-17-Aramis-Steininger








