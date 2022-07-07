const { getCategories } = require('./controllers/CategoryController');

module.exports.getCategories = async (event) => {
  const categories = await getCategories(event);

  const data = {
    statusCode: (categories.length > 0) ? 200 : 404,
    body: JSON.stringify(categories),
  };

  return data;
};
