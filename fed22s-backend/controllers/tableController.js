const Table = require('../models/Table');

// Get table by ID
const getTableById = async (req, res) => {
  try {
    const { tableId } = req.params;
    const table = await Table.findById(tableId);
    if (!table) {
      return res.status(404).json({ error: 'Table not found' });
    }
    res.json(table);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve table' });
  }
};

// Get all tables
const getAllTables = async (req, res) => {
  try {
    const tables = await Table.find({});
    res.json(tables);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tables' });
  }
};

module.exports = {
  getTableById,
  getAllTables,
};
