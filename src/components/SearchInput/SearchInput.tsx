import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import './SearchInput.css'
import { ChangeEvent } from "react";

interface BannerProps {
    search: string,
    handleSearch: (search: string) => void
    handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({ search, handleSearch, handleChangeInput }: BannerProps) {
    return (
        <div className="search">
            <input
                type="text"
                placeholder='pesquisar'
                onChange={handleChangeInput}
                value={search}
            />
            <button onClick={() => handleSearch(search)}>
                <Link to='/search-page' >
                    <Search />
                </Link>
            </button>
        </div>
    )
}