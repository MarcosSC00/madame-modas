import { getProductsData } from '../../hooks/getProductsData'
import { ProductCard } from '../ProductCard/ProductCard'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCartContext } from '../../Contexts/useCartContext'
import './Slider.css'
import 'swiper/swiper-bundle.css'

export function Slider() {
    const { addProduct } = useCartContext()
    
    return (
        <>
            <Swiper
                modules={[EffectCoverflow, Pagination, Navigation]}
                effect='coverflow'
                centeredSlides={true}
                loop={true}
                slidesPerView='auto'
                pagination={{
                    enabled: true,
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={true}
                breakpoints={{
                    0: {
                        coverflowEffect: {
                            rotate: 0,
                            scale: 0.8,
                            depth: 100,
                            stretch: 0,
                            modifier: 1,
                        }
                    },
                    768: {
                        grabCursor: true,
                        coverflowEffect: {
                            rotate: 0,
                            scale: 0.9,
                            depth: 100,
                            stretch: -20,
                            modifier: 1
                        },
                    }
                }}
            >
                {getProductsData.map((prod, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard
                            img={prod.img}
                            nameProd={prod.nameProd}
                            price={prod.price}
                            oldPrice={prod.oldPrice}
                            addProductInCart={() => addProduct(prod)}
                        >
                            {prod.description}
                        </ProductCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    )
}