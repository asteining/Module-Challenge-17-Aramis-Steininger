import { User, Thought } from '../models/index.js';
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find().populate('thoughts').populate('friends');
        return res.json(users);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .populate('thoughts')
            .populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'No user found with that id' });
        }
        return res.json(user);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found with that id' });
        }
        return res.json(user);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'No user found with that id' });
        }
        // BONUS: Remove associated thoughts when a user is deleted.
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        return res.json({ message: 'User and associated thoughts deleted.' });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found with that id' });
        }
        return res.json(user);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const removeFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found with that id' });
        }
        return res.json(user);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
