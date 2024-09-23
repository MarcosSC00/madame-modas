import { Container } from '../Container/Container'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../../Contexts/useSearchContext'
import { Footer } from '../Footer/Footer'
import './Home.css'
import { Slider } from '../Slider/Slider'
import { Banner } from '../Banner/Banner'
import { SearchInput } from '../SearchInput/SearchInput'
import { getProductsData } from '../../hooks/getProductsData'

export function Home() {
    const [search, setSearch] = useState('')
    const { handleSearch } = useSearchContext()

    function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    return (
        <>
            <Banner>
                <SearchInput
                    search={search}
                    handleSearch={() => handleSearch(search, getProductsData)}
                    handleChangeInput={handleChangeInput}
                />
            </Banner>
            <Container>
                <div className="home">
                    <div className="content-home">
                        <div className='header-mobile'>
                            <div className='img-logo'>
                                <img src="logo_madame_modas.png" alt="" />
                            </div>
                            <div className="title">
                                <h2>Nossos Produtos</h2>
                            </div>
                            <div className="search-mobile">
                                <SearchInput
                                    search={search}
                                    handleSearch={() => handleSearch(search, getProductsData)}
                                    handleChangeInput={handleChangeInput}
                                />
                            </div>
                        </div>

                        <div className="products-section">
                            <Slider />
                        </div>

                        <div className="title">
                            <h2>Categorias</h2>
                        </div>

                        <div className="categories">

                            <div className="card-category">
                                <div className="img-category">
                                    <img src="/12588.jpg" alt="" />
                                </div>
                                <Link to="/women" className="name-category">
                                    WOMEN'S
                                </Link>
                            </div>

                            <div className="card-category">
                                <div className="img-category">
                                    <img src="/4917.jpg" alt="" />
                                </div>
                                <Link to="/men" className="name-category">
                                    MEN'S
                                </Link>
                            </div>

                            <div className="card-category">
                                <div className="img-category">
                                    <img src="/235723328_11119632.jpg" alt="" />
                                </div>
                                <Link to="/accessories" className="name-category">
                                    ACCESSORIES'S
                                </Link>
                            </div>

                        </div>

                        <div className="cards">
                            <ul>
                                <li>
                                    <div className="content-cards">
                                        <div>
                                            <img src="/sacola-de-compras.png" alt="" />
                                        </div>
                                        <h2>Title</h2>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur, dolor unde perferendis</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="content-cards">
                                        <div>
                                            <img src="/suporte-online.png" alt="" />
                                        </div>
                                        <h2>Title</h2>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur, dolor unde perferendis</span>
                                    </div></li>
                                <li><div className="content-cards">
                                    <div>
                                        <img src="payments.png" alt="" />
                                    </div>
                                    <h2>Title</h2>
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur, dolor unde perferendis</span>
                                </div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container >
            <Footer />
        </>
    )
}