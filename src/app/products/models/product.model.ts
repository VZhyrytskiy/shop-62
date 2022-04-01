export interface ProductModel {
    id: number,
    title: string,
    imageUrl: string,
    description: string,
    price: number,

}

export interface ProductAvailableModel extends ProductModel{
    isAvailable: boolean;
}