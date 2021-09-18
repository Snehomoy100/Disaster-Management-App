import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "This is home route",
  });
});

export { router as homeRouter };
