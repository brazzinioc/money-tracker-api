const { executeQuery } = require('../utils/database');

module.exports.getMovementTypes = async (event) => {
  try {
    const result = await executeQuery('CALL sp_list_movement_type();', []);

    if (result.length === 0 || result[0].length === 0) {
      return [];
    }

    return result[0];
  } catch (e) {
    console.error(e);
  }

  return [];
};
