import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import cleanDB from './cleanDB.js';
import {
  getRandomName,
  getRandomEmail,
  getRandomThoughtText,
  getRandomReactions,
  getRandomArrItem,
} from './data.js';
import type { IUser } from '../models/User.js';

try {
  // Connect to the database and clean existing collections
  await db();
  await cleanDB();

  // Create an array to hold user objects
  const users = [];
  for (let i = 0; i < 20; i++) {
    const name = getRandomName();
    // Append the loop index to ensure the username is unique
    const uniqueName = `${name}_${i}`;
    const email = getRandomEmail(uniqueName);
    users.push({
      username: uniqueName,
      email: email,
    });
  }

  // Insert users into the database
  const userData = await User.create(users);

  // Create an array to hold thought objects
  const thoughts = [];
  for (let i = 0; i < 30; i++) {
    // Pick a random user from the inserted user data
    const randomUser: IUser = getRandomArrItem(userData);
    thoughts.push({
      thoughtText: getRandomThoughtText(),
      username: randomUser.username,
      reactions: getRandomReactions(),
    });
  }

  // Insert thoughts into the database
  const thoughtData = await Thought.create(thoughts);

  // For each thought, update the corresponding user document to push the thought's _id
  for (const thought of thoughtData) {
    await User.findOneAndUpdate(
      { username: thought.username },
      { $push: { thoughts: thought._id } },
      { new: true }
    );
  }

  // Cast userData to an array of IUser so that TypeScript recognizes the 'username' property.
  const usersArray = userData as IUser[];
  console.table(usersArray.map((user) => user.username));
  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
