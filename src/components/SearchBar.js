import {useState} from "react"

const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(event.target.value);
        console.log("Searching for ", searchQuery);
        onSearch(searchQuery);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" autofocus="autofocus" value={searchQuery} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar