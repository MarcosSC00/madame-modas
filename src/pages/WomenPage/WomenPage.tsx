import { ChangeEvent, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Footer } from "../../components/Footer/Footer";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { getProductsWomen } from '../../hooks/getProductsWoman'
import { useSearchContext } from "../../Contexts/useSearchContext";
import { ProductsPagination } from "../../components/ProductsPagination/ProductsPagination";
import './WomenPage.css'

export function WomenPage() {

    const [search, setSearch] = useState('')
    const { handleSearch } = useSearchContext()

    function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    return (
        <>
            <Container>
                <header>
                    <div className="title">
                        <h2>Produtos Femininos</h2>
                    </div>
                    <div className="input-men-page">
                        <SearchInput
                            search={search}
                            handleSearch={() => handleSearch(search, getProductsWomen)}
                            handleChangeInput={handleChangeInput}
                        />
                    </div>
                </header>
                <div className="content-women-page">
                    <ProductsPagination
                        productsTarget={getProductsWomen}
                    />
                </div>
            </Container>
            <Footer />
        </>
    )
}