import { ChevronDown, Home, ShoppingCart } from 'lucide-react'
import './Navigation.css'
import { useCartContext } from '../../Contexts/useCartContext'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export function Navigation() {
    const { productsInCart } = useCartContext()

    useEffect(() => {
        const checkout = document.getElementById('pages') as HTMLInputElement
        const pagesBtn = document.querySelector('.input') as HTMLElement
        const handleCheckout = (event: MouseEvent) => {
            if(checkout && !checkout.contains(event.target as Node) && !pagesBtn.contains(event.target as Node)){
                checkout.checked = false
            }
        }

        document.addEventListener('click', handleCheckout)

        return () => {
            document.removeEventListener('click', handleCheckout)
        }
    }, [])

    return (
        <nav className='navigation'>
            <div className="navigation-content">
                <div>
                    <Link to="/" className="logo">
                        <Home />
                    </Link>
                </div>
                <div className="shortcuts-desktop">
                    <ul>
                        <li><Link to="/men">MEN</Link></li>
                        <li><Link to="/women">WOMEN</Link></li>
                        <li><Link to="/accessories">ACCESSORIES</Link></li>
                    </ul>
                </div>
                <div className="shortcuts-mobile">
                    <input type="checkbox" id='pages' />
                    <label htmlFor="pages">
                        <div className='input'>
                            <span>PAGES</span>
                            <ChevronDown />
                        </div>

                        <ul>
                            <li><Link to="/men">MEN</Link></li>
                            <li><Link to="/women">WOMEN</Link></li>
                            <li><Link to="/accessories">ACCESSORIES</Link></li>
                        </ul>
                    </label>
                </div>
                {productsInCart.length > 0 ? (
                    <Link to="/meu-carrinho">
                        <button className="cart">
                            <div className='icon-cart'>
                                <ShoppingCart />
                            </div>

                            <div className="counter">
                                <span>{productsInCart.length}</span>
                            </div>
                        </button>
                    </Link>
                ) : (
                    <Link to="/meu-carrinho">
                        <button className="cart-empty">
                            <div className='icon-cart'>
                                <ShoppingCart />
                            </div>
                        </button>
                    </Link>
                )}

            </div>
        </nav>
    )
}