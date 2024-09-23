import { ReactNode, SetStateAction } from "react";

export interface ProductData {
    img: string,
    nameProd: string,
    price: string,
    children?: ReactNode,
    oldPrice?: string,
    quantityInStock?: number,
}

export interface ResponseData{
    productsInCart: ProductData[]
    setProductInCart: React.Dispatch<SetStateAction<ProductData[]>>
    addProduct: (product: ProductData) => void
    removeProduct: (productToRemove: ProductData) => void
    isDisabled: boolean
    updateQuantity: (nameProd: string, quantity: number) => void
    quantities: {[nameProduct: string]: number}
}