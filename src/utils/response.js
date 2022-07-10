module.exports.jsonResponse = (code = 500, data = {}, msg = '') => {
  const response = {
    statusCode: code,
    body: JSON.stringify(data),
    message: msg,
  };

  return response;
};
