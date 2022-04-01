import { ProductAvailableModel } from "src/app/products/models/product.model";

export interface CartProduct {
    product: ProductAvailableModel,
    num: number
}