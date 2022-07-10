const { executeQuery } = require('../utils/database');

module.exports.getSubcategories = async (event) => {
  try {
    const result = await executeQuery('CALL sp_list_sub_category();', []);

    if (result.length === 0 || result[0].length === 0) {
      return [];
    }

    return result[0];
  } catch (e) {
    console.error(e);
  }

  return [];
};
