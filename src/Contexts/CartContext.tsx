import { createContext, ReactNode, useState } from "react";
import { ProductData, ResponseData } from "../interfaces/ProductData";
import { toast, Toaster } from "sonner";

export const CartContext = createContext<ResponseData | undefined>(undefined)

interface CartContextProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {

    const [productsInCart, setProductInCart] = useState<ProductData[]>([])
    const [isDisabled, setIsDisabled] = useState(false)
    const [quantities, setQuantities] = useState<{[nameProd: string]: number}>({})

    async function addProduct(newProduct: ProductData): Promise<void> {

        setIsDisabled(true)

        const sendProd = new Promise<void>((resolve, reject) => {
            try {
                const repeated = productsInCart.some(prod => (
                    prod.nameProd === newProduct.nameProd
                ))

                if (!repeated) {

                    let newList = [...productsInCart, newProduct]

                    setTimeout(() => {
                        setIsDisabled(false)
                        resolve()
                        setProductInCart(newList)
                    }, 1000)

                } else {
                    setTimeout(() => {
                        setIsDisabled(false)
                        reject(new Error('Produto já adicionado.'))
                    }, 500)
                }

            } catch (error) {
                setIsDisabled(false)
            }
        })

        toast.promise(sendProd, {
            loading: '...loading',
            success: 'Produto adicionado ao carrinho.',
            error: (err) => toast.warning(`${err.message}`)
        })
    }

    function removeProduct(productToRemove: ProductData) {
        const newArrayProds = productsInCart.filter(prod => prod.nameProd !== productToRemove.nameProd)
        setProductInCart(newArrayProds)
    }

    function updateQuantity(nameProd: string, quantity: number) {
        setQuantities(prev => ({...prev, [nameProd]: quantity}))
    }

    return (
        <CartContext.Provider value={{ productsInCart, setProductInCart, addProduct, isDisabled, removeProduct,quantities, updateQuantity }}>
            <Toaster
                richColors={true}
                position="bottom-right"
                visibleToasts={1}
                toastOptions={{
                    style: {
                        backgroundColor: 'white',
                        width: '100%',
                        padding: '10px',
                        fontSize: '18px',
                        transition: '0.3s ease'
                    }
                }}
            />
            {children}
        </CartContext.Provider>
    )
}