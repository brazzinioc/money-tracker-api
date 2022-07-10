const { executeQuery } = require('../utils/database');

module.exports.getCategories = async (event) => {
  try {
    const result = await executeQuery('CALL sp_list_category();', []);
    if (result.length === 0 || result[0].length === 0) {
      return [];
    }

    return result[0];
  } catch (e) {
    console.error(e);
  }

  return [];
};

module.exports.createCategory = async (category) => {
  let result = [];
  try {
    result = await executeQuery('CALL sp_create_category(?,?);', Object.values(category));
    if (!result[0]) {
      return [];
    }

    return result[0];
  } catch (e) {
    console.error(e);
  }

  return [];
};
