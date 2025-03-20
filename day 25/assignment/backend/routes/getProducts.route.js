import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getProductData } from "../controllers/data.controller.js";

const productRouter = express.Router();

productRouter.get('/dashboard', protect, getProductData);

export default productRouter;