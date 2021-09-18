export const notFoundHandler = (request, response, next) => {
  const message = "Resource not found";

  response.status(404).send(message);
  // next();
};
