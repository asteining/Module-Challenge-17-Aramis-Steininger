// Array of sample names for users
const names: string[] = [
  'Alice', 'Bob', 'Charlie', 'Diana', 'Eve',
  'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy',
  'Karl', 'Laura', 'Mallory', 'Niaj', 'Olivia',
  'Peggy', 'Rupert', 'Sybil', 'Trent', 'Victor',
  'Wendy'
];

// Array of sample phrases for thoughts
const thoughtPhrases: string[] = [
  "Just had a great day!",
  "Feeling excited about life.",
  "What a wonderful world!",
  "Life is full of surprises.",
  "I love coding.",
  "Exploring new horizons.",
  "Enjoying the little moments.",
  "Working on my next project.",
  "Dream big, work hard!",
  "Stay positive, stay happy!"
];

/**
 * Generic helper: Returns a random item from any array.
 */
export function getRandomArrItem<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

/**
 * Returns a random name from the names array.
 */
export const getRandomName = (): string => getRandomArrItem<string>(names);

/**
 * Generates a random email based on the given name.
 */
export const getRandomEmail = (name: string): string => {
  const lowerName = name.toLowerCase().replace(/\s/g, '');
  return `${lowerName}${Math.floor(Math.random() * 1000)}@example.com`;
};

/**
 * Returns a random thought text from the thoughtPhrases array.
 */
export const getRandomThoughtText = (): string => getRandomArrItem<string>(thoughtPhrases);

/**
 * Generates a random set of reactions (0 to 3) for a thought.
 */
export const getRandomReactions = (): { reactionBody: string; username: string }[] => {
  const reactionCount = Math.floor(Math.random() * 4); // 0 to 3 reactions
  const reactions: { reactionBody: string; username: string }[] = [];
  for (let i = 0; i < reactionCount; i++) {
    const reaction = {
      reactionBody: getRandomArrItem<string>(thoughtPhrases),
      username: getRandomName(),
      // The Thought model's default will handle createdAt formatting.
    };
    reactions.push(reaction);
  }
  return reactions;
};
