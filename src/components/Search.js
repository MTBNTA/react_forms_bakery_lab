import { useState } from "react";
import CakeList from "./CakeList";

const Search = ({filterCakes}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        filterCakes(searchTerm);
        // return cakes.filter(cake => cake.cakeName.toLowerCase().includes(searchTerm));
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text" 
                    name="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
                />
                <input type="submit" value="Go" />
            </form>
        </>
    );
}
 
export default Search;