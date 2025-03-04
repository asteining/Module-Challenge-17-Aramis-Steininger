import { Request, Response } from 'express';
import { User, Thought } from '../models/index.js';

export const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.find().populate('thoughts').populate('friends');
    return res.json(users);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('thoughts')
      .populate('friends');
    if (!user) {
      return res.status(404).json({ message: 'No user found with that id' });
    }
    return res.json(user);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  // log the request body
  console.log('createUser req.body:' , req.body);

  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'No user found with that id' });
    }
    return res.json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'No user found with that id' });
    }
    // BONUS: Remove associated thoughts when a user is deleted.
    await Thought.deleteMany({ _id: { $in: user.thoughts } });
    return res.json({ message: 'User and associated thoughts deleted.' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const addFriend = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'No user found with that id' });
    }
    return res.json(user);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const removeFriend = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'No user found with that id' });
    }
    return res.json(user);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
