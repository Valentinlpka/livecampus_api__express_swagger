const validateBody = (schema) => {
    return (req, res, next) => {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          error: "Données invalides",
          details: result.error.errors.map((e) => `${e.path} : ${e.message}`),
        });
      }
      req.body = result.data;
      next();
    };
  };
  
  module.exports = { validateBody };