import { Container } from "../../components/Container/Container"
import { ProductInCartModel } from "../../components/ProductInCartModel/ProductInCartModel"
import { useCartContext } from "../../Contexts/useCartContext"
import './CartPage.css'

export function CartPage() {

    const { productsInCart, removeProduct, quantities } = useCartContext()

    const totalPrice = () => {
        var total = 0
        productsInCart.forEach(prod => {
            const qtdProduct = quantities[prod.nameProd] || 1;
            total += Number(prod.price.split(' ').pop()) * qtdProduct;
        });
        return total
    }

    return (
        <Container>
            <div className="content-cart-page">
                {productsInCart.length > 0 ? (
                    productsInCart.map((prod, index) => (
                        <ProductInCartModel
                            key={index}
                            img={prod.img}
                            nameProd={prod.nameProd}
                            price={prod.price}
                            qtdInCart={quantities[prod.nameProd]}
                            removeProduct={() => removeProduct(prod)}
                        />
                    ))
                ) : (
                    <div className="empty-cart-img">
                        <img src="/cart-vazio.png" alt="" />
                    </div>
                )
                }

                <div className="checkout">
                    <div className="total-value">
                        <span>{`TOTAL: R$ ${totalPrice()}`}</span>
                    </div>
                    <button>Finalizar Compra</button>
                </div>

                <div className="modal-finish">
                    <div className="content-modal">
                        <h2>Summary</h2>
                        <div className="info-table">

                            <table className="table-cart">
                                <thead>
                                    <tr>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Valor</th>
                                        <th scope="col">Qtd</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productsInCart.map((prod, index) => (
                                        <tr key={index}>
                                            <th scope="col">{prod.nameProd}</th>
                                            <td>{prod.price}</td>
                                            <td>{quantities[prod.nameProd] || 1}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th scope="row" colSpan={2}>Total</th>
                                        <td><span>{`R$ ${totalPrice()}`}</span></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <button>Finalizar Compra</button>
                    </div>
                </div>

            </div>
        </Container>


    )
}