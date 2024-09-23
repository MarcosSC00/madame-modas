import { Container } from "../../components/Container/Container";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useCartContext } from "../../Contexts/useCartContext";
import { useSearchContext } from "../../Contexts/useSearchContext";
import { getProductsData } from "../../hooks/getProductsData";
import { Footer } from "../../components/Footer/Footer";
import { ProductsPagination } from "../../components/ProductsPagination/ProductsPagination";
import './SearchPage.css'

export function SearchPage() {

    const { productsInSearch, input } = useSearchContext()
    const { addProduct } = useCartContext()

    return (
        <>
            <Container>
                <div className="content-search-page">
                    {productsInSearch.length !== 0 && input !== '' ? (
                        <>
                            <h2>{`Resultados encontrados para "${input}"`}</h2>
                            <div className="result">
                                {productsInSearch.map((prod, index) => (
                                    <ProductCard
                                        key={index}
                                        nameProd={prod.nameProd}
                                        img={prod.img}
                                        price={prod.price}
                                        oldPrice={prod.oldPrice}
                                        addProductInCart={() => addProduct(prod)}
                                        children={prod.description}
                                    >
                                    </ProductCard>
                                ))}
                            </div>
                        </>
                    ) : (
                        <h2>{`Nenhum resultado encontrado para "${input}"`}</h2>
                    )}
                    <ProductsPagination
                        title="Produtos relacionados"
                        productsTarget={getProductsData}
                    />
                </div>
            </Container>
            <Footer /></>
    )
}