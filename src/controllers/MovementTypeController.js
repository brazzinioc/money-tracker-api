const { getMovementTypes } = require('../services/MovementTypeService');

module.exports.getMovementTypes = async (event) => {
  const movementTypes = await getMovementTypes(event);
  return movementTypes;
};
