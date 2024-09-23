import { ChangeEvent, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Footer } from "../../components/Footer/Footer";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { getProductsMen } from '../../hooks/getProductsMen'
import { useSearchContext } from "../../Contexts/useSearchContext";
import './MenPage.css'
import { ProductsPagination } from "../../components/ProductsPagination/ProductsPagination";

export function MenPage() {

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
                        <h2>Produtos Masculinos</h2>
                    </div>
                    <div className="input-men-page">
                        <SearchInput
                            search={search}
                            handleSearch={() => handleSearch(search, getProductsMen)}
                            handleChangeInput={handleChangeInput}
                        />
                    </div>
                </header>

                <div className="content-men-page">
                    <ProductsPagination
                        productsTarget={getProductsMen}
                    />
                </div>
            </Container>
            <Footer /></>
    )
}