import { X } from "lucide-react";
import { ProductData } from "../../interfaces/ProductData";
import './ProductInCartModel.css'
import { useCartContext } from "../../Contexts/useCartContext";

export interface ProductInCartModelProps extends ProductData {
    removeProduct: () => void,
    qtdInCart: number
}

export function ProductInCartModel({ img, nameProd, price, qtdInCart, removeProduct }: ProductInCartModelProps) {

    const { quantities, updateQuantity } = useCartContext()
    const qtdProduct = quantities[nameProd] || 1

    const increment = () => {
        updateQuantity(nameProd, qtdProduct + 1);
    };

    const decrement = () => {
        if (qtdProduct > 1) {
            updateQuantity(nameProd, qtdProduct - 1);
        }
    };
    return (
        <div className="container-cart">

            <div className="content-cart">
                <div className="img-prod">
                    <img src={img} alt="" />
                </div>

                <div className="info-cart">
                    <h2>{nameProd}</h2>

                    <div className="price-qtd">
                        <span className="price">{price}</span>

                        <div className="btn-increments">
                            <button
                                onClick={decrement}
                                disabled={qtdInCart <= 1 ? true : false}
                            >-</button>
                            <span>{qtdProduct}</span>
                            <button
                                onClick={increment}
                            >+</button>
                        </div>
                    </div>
                </div>

                <button
                    className="btn-remove"
                    onClick={() => removeProduct()}
                >
                    <X />
                </button>
            </div>
        </div>
    )
}