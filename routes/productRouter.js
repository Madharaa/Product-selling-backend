import express from 'express';
import { deleteProduct, getProducts, saveProduct, updateProduct } from '../controllers/productController.js';

 
const productRouter = express.Router();

productRouter.get("/" ,getProducts);
productRouter.post("/",saveProduct);
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct)

export default productRouter;