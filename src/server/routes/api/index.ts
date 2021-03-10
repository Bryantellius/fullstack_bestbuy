import * as express from "express";
import productRouter from "./productRouter";
import categoryRouter from "./categoryRouter";
import imageRouter from "./images";

const router = express.Router();

router.get("/test", (req, res, next) => {
  try {
    res.status(200).json({ msg: "Hello World!" });
  } catch (error) {
    next(error);
  }
});

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/images", imageRouter);

export default router;
