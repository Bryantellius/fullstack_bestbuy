import * as express from "express";
import db from "../../db/queries/products";
import filterByCategory from "../../db/queries/filtered_products";

const router = express.Router();

router.get(
  "/:id?",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    let id: number = parseInt(req.params.id);
    let data: any;
    try {
      if (id) {
        data = await db.getOneProduct(id);
      } else {
        data = await db.getAllProducts();
      }

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/filter_category/:id",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      let id = parseInt(req.params.id);
      let data: any;
      if (id) {
        data = await filterByCategory(id);
      } else {
        data = await db.getAllProducts();
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      let { body } = req;
      let data = await db.insertProduct(body);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      let id = parseInt(req.params.id);
      let { body } = req;
      let data = await db.updateProduct(body, id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      let id = parseInt(req.params.id);
      let data = await db.removeProduct(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
