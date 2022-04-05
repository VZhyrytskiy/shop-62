import { ProductAvailableModel } from "src/app/products/models";

export interface CartProduct {
    product: ProductAvailableModel,
    num: number
}
