import { useState } from 'react'
import { ModelHookProducts } from '../../hooks/modelHookProducts'
import { useCartContext } from '../../Contexts/useCartContext'
import { ProductCard } from '../ProductCard/ProductCard'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import './ProductsPagination.css'

interface ProductsPaginationProps{
    productsTarget: ModelHookProducts[]
    title?: string
}

export function ProductsPagination({productsTarget, title}: ProductsPaginationProps) {

    const [page, setPage] = useState(1)
    const { addProduct } = useCartContext()
    const totalPages = Math.ceil(productsTarget.length / 8)

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToPreviousPage() {
        setPage(page - 1)
    }

    function goToFirstPage() {
        setPage(1)
    }

    function goToLastPage() {
        setPage(totalPages)
    }

    return (
        <div className='pagination'>
            <h2>{title}</h2>
            <div className="prods">
                {productsTarget.slice((page - 1) * 8, page * 8).map((prod, index) => (
                    <ProductCard
                        key={index}
                        nameProd={prod.nameProd}
                        img={prod.img}
                        price={prod.price}
                        oldPrice={prod.oldPrice}
                        addProductInCart={() => addProduct(prod)}
                        children={prod.description}
                    />
                ))}
            </div>
            <div className="toggle-btns">
                <button
                    disabled={page === 1}>
                    <ChevronsLeft
                        className="size-4"
                        onClick={goToFirstPage}
                    />
                </button>
                <button
                    disabled={page === 1}>
                    <ChevronLeft
                        className="size-4"
                        onClick={goToPreviousPage}
                    />
                </button>
                <button
                    disabled={page === totalPages}
                >
                    <ChevronRight
                        className="size-4"
                        onClick={goToNextPage}
                    />
                </button>
                <button
                    disabled={page === totalPages}
                >
                    <ChevronsRight
                        className="size-4"
                        onClick={goToLastPage}
                    />
                </button>
            </div>
        </div>
    )
}