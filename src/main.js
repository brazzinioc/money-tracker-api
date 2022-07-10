const { getCategories, createCategory } = require('./controllers/CategoryController');
const { getSubcategories } = require('./controllers/SubcategoryController');
const { getMovementTypes } = require('./controllers/MovementTypeController');

module.exports.getCategories = async (event) => {
  const categories = await getCategories(event);

  const data = {
    statusCode: (categories.length > 0) ? 200 : 204,
    body: JSON.stringify(categories),
  };

  return data;
};

module.exports.createCategory = async (event) => {
  const result = await createCategory(event);
  return result;
};

module.exports.getSubcategories = async (event) => {
  const subcategories = await getSubcategories(event);

  const data = {
    statusCode: (subcategories.length > 0) ? 200 : 204,
    body: JSON.stringify(subcategories),
  };

  return data;
};

module.exports.getMovementTypes = async (event) => {
  const movementTypes = await getMovementTypes(event);

  const data = {
    statusCode: (movementTypes.length > 0) ? 200 : 204,
    body: JSON.stringify(movementTypes),
  };

  return data;
};
