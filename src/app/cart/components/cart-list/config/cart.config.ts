import { ProductModel } from "src/app/products/models/product.model";
import { ProductPaths } from "../../../../products/config/products.config"

export const CartConfig: ProductModel[] = [
    {
        id: 0,
        title: 'Buyed product 0',
        imageUrl: ProductPaths.imagePath,
        description: 'Some text',
        price: 180,
      },
      {
        id: 1,
        title: 'Buyed product 1',
        imageUrl: ProductPaths.imagePath,
        description: 'Some text',
        price: 180,
      },
]