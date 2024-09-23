import { useContext } from "react"
import { SearchContext } from "./SearchContext"

export function useSearchContext(){

    const searchResult = useContext(SearchContext)
    
    if(!searchResult){
        throw new Error("Ops! algo deu errado.")
    }

    return searchResult
}