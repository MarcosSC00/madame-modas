import './ProductCard.css'
import { ProductBubble } from '../ProductBubble/ProductBubble'
import { ProductData } from '../../interfaces/ProductData'

interface ProductCardProps extends ProductData{
    addProductInCart: () => void
}

export function ProductCard({ 
    img,
    nameProd,
    price,
    children,
    oldPrice,
    addProductInCart}: ProductCardProps) {

    const newPrice = Number(price.split(' ').pop())
    const lastPrice = Number(oldPrice?.split(' ').pop())

    if (newPrice >= lastPrice) {
        oldPrice = ''
    }

    function calculateDiscount() {
        var discount = 0
        if (newPrice < lastPrice) {
            discount = Number((100 - ((newPrice * 100) / lastPrice)).toFixed(0))
        }
        return discount
    }
    return (
        <div className="card">
            <div className="content-prod-card">

                {calculateDiscount() > 0 && oldPrice !== '' ? (
                    <div className="bubbles">
                        <ProductBubble left={true}>
                            {`R$ ${calculateDiscount()}%`}
                        </ProductBubble>
                    </div>
                ) : (null)}

                <div className="img-prod">
                    <img src={img} alt="proctut's image" />
                </div>
                <div className="product-info">
                    <h2>{nameProd}</h2>
                    {oldPrice === '' || oldPrice === undefined ? (
                        <div className="prices">
                            <span className='discount-price'>{`${price}`}</span>
                        </div>

                    ) : (
                        <div className="prices">
                            <span className='old-price'>{`${oldPrice}`}</span>
                            <span className='discount-price'>{`${price}`}</span>
                        </div>
                    )}
                </div>
                <div className="description">
                    <p>
                        {children}
                    </p>
                </div>
            </div>
            <button
                onClick={addProductInCart}
                className='btn-card'
            >
                Adicionar ao carrinho
            </button>
        </div>
    )
}