import { Thought, User } from '../models/index.js';
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find();
        return res.json(thoughts);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with that id' });
        }
        return res.json(thought);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        // Push the thought's _id into the associated user's thoughts array.
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
        return res.status(201).json(thought);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $set: req.body }, { new: true, runValidators: true });
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with that id' });
        }
        return res.json(thought);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with that id' });
        }
        // Optionally remove the thought reference from the associated user
        await User.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true });
        return res.json({ message: 'Thought deleted.' });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true, runValidators: true });
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with that id' });
        }
        return res.json(thought);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with that id' });
        }
        return res.json(thought);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
