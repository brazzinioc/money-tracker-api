const {
  getCategories,
  createCategory,
} = require('../services/CategoryService');

const {
  jsonResponse,
} = require('../utils/response');

module.exports.getCategories = async (event) => {
  const categories = await getCategories(event);
  return categories;
};

module.exports.createCategory = async (event) => {
  const data = JSON.parse(event.body);

  if (!data.category || !data.description) {
    return jsonResponse(400, {}, 'Missing category name and description');
  }

  const categoryData = {
    category: data.category,
    description: data.description,
  };

  const category = await createCategory(categoryData);

  if (!category || category.length === 0) {
    return jsonResponse(500, {}, 'Error creating category');
  }

  return jsonResponse(201, category, 'Category created');
};
