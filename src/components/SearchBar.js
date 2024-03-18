import {useState} from "react"

const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching for ", searchQuery);
        onSearch(searchQuery);
    }

    const handleOnChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" autofocus="autofocus" value={searchQuery} onChange={handleOnChange} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar