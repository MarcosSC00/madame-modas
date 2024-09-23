import {faker} from '@faker-js/faker'

export const  getProductsWomen = Array.from({length: 20}).map(() => {
    return {
        img: faker.image.urlLoremFlickr({category:'female-fashion'}),
        nameProd: faker.commerce.productName(),
        price: faker.commerce.price({min:1, max:1000, symbol:'R$ ', dec:0}),
        description: faker.commerce.productDescription(),
        oldPrice: faker.commerce.price({min:1, max:1000, symbol:'R$ ', dec:0}),
        quantityInStock: faker.number.int({min: 1, max: 100})
    }
})