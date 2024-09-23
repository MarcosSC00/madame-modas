import { createContext, ReactNode, useState } from "react"
import { ModelHookProducts } from "../hooks/modelHookProducts"

export interface searchProps {
    handleSearch: (search: string, dataProducts: ModelHookProducts[]) => void,
    productsInSearch: ModelHookProducts[],
    input: string
}

export const SearchContext = createContext<searchProps | undefined>(undefined)

interface SearchContextProviderProps {
    children: ReactNode
}

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [productsInSearch, setProductsInSearch] = useState<ModelHookProducts[]>([])
    const [input, setInput] = useState('')

    function handleSearch(search: string, dataProducts: ModelHookProducts[]) {
        const result = search.trim() !== '' ? dataProducts.filter(prod => {
            setInput(search)
            const target = prod.nameProd.toLowerCase().includes(search.toLowerCase())
            if(target){
                return target
            }
            return null
        }) : dataProducts
        setProductsInSearch(result)
    }


    return (
        <SearchContext.Provider value={{ handleSearch, productsInSearch, input }}>
            {children}
        </SearchContext.Provider>
    )
}