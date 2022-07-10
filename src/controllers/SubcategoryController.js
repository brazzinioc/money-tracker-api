const { getSubcategories } = require('../services/SubcategoryService');

module.exports.getSubcategories = async (event) => {
  const subcategories = await getSubcategories(event);
  return subcategories;
};
