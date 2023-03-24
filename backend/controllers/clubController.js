const Club = require('../models/club');

exports.getAll = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newClub = new Club(req.body);
    await newClub.save();
    res.status(201).json(newClub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) {
      return res.status(404).json({ error: 'Club not found' });
    }
    res.status(200).json(club);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClub) {
      return res.status(404).json({ error: 'Club not found' });
    }
    res.status(200).json(updatedClub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedClub = await Club.findByIdAndDelete(req.params.id);
    if (!deletedClub) {
      return res.status(404).json({ error: 'Club not found' });
    }
    res.status(200).json({ message: 'Club deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
