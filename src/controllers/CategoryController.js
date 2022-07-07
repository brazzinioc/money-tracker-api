const { getCategories } = require('../services/CategoryService');

module.exports.getCategories = async (event) => {
  const categories = await getCategories(event);
  return categories;
};
