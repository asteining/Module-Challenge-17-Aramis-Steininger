// Array of sample names for users
const names = [
    'Alice', 'Bob', 'Charlie', 'Diana', 'Eve',
    'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy',
    'Karl', 'Laura', 'Mallory', 'Niaj', 'Olivia',
    'Peggy', 'Rupert', 'Sybil', 'Trent', 'Victor',
    'Wendy'
];
// Array of sample phrases for thoughts
const thoughtPhrases = [
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
export function getRandomArrItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
/**
 * Returns a random name from the names array.
 */
export const getRandomName = () => getRandomArrItem(names);
/**
 * Generates a random email based on the given name.
 */
export const getRandomEmail = (name) => {
    const lowerName = name.toLowerCase().replace(/\s/g, '');
    return `${lowerName}${Math.floor(Math.random() * 1000)}@example.com`;
};
/**
 * Returns a random thought text from the thoughtPhrases array.
 */
export const getRandomThoughtText = () => getRandomArrItem(thoughtPhrases);
/**
 * Generates a random set of reactions (0 to 3) for a thought.
 */
export const getRandomReactions = () => {
    const reactionCount = Math.floor(Math.random() * 4); // 0 to 3 reactions
    const reactions = [];
    for (let i = 0; i < reactionCount; i++) {
        const reaction = {
            reactionBody: getRandomArrItem(thoughtPhrases),
            username: getRandomName(),
            // The Thought model's default will handle createdAt formatting.
        };
        reactions.push(reaction);
    }
    return reactions;
};
