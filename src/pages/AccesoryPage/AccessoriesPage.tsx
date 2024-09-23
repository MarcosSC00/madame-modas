import { ChangeEvent, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Footer } from "../../components/Footer/Footer";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { getProductsAccessories } from '../../hooks/getProductsAccessories'
import { useSearchContext } from "../../Contexts/useSearchContext";
import { ProductsPagination } from "../../components/ProductsPagination/ProductsPagination";
import './AccessoryPage.css'

export function AccessoriesPage() {

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
                        <h2>Acessórios</h2>
                    </div>
                    <div className="input-men-page">
                        <SearchInput
                            search={search}
                            handleSearch={() => handleSearch(search, getProductsAccessories)}
                            handleChangeInput={handleChangeInput}
                        />
                    </div>
                </header>
                <div className="content-accessories-page">
                    <ProductsPagination
                        productsTarget={getProductsAccessories}
                    />
                </div>
            </Container>
            <Footer />
        </>
    )
}