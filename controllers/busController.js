import Bus from "../models/bus.js";

// GET all buses
export const getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getAvailableBuses = async (req, res) => {
  try {
    const buses = await Bus.find({ isOccupied: false }); // Example condition for availability
    res.json(buses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } 
};

// ADD a new bus
export const addBus = async (req, res) => {
  try {
    const newBus = new Bus(req.body); // req.body should have bus fields
    const savedBus = await newBus.save();
    res.status(201).json(savedBus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// DELETE a bus
export const deleteBus = async (req, res) => {
  try {
    await Bus.findByIdAndDelete(req.params.id);
    res.json({ message: "Bus deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// UPDATE bus info
export const updateBus = async (req, res) => {
  try {
    const updated = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
