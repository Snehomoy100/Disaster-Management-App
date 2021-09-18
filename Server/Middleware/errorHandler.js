export const errorHandler = (error, request, response, next) => {
  const statusCode = response.statusCode === 200 ? 500 : response.statusCode;

  if (process.env.NODE_ENV === "development") console.log(error);
  response.status(statusCode).json({ message: error.message });
};
