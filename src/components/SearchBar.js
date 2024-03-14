import {useState} from "react"

const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(event.target.value);
        onSearch(searchQuery);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" autofocus="autofocus" value={searchTerm} />
            <button type="submit">Search</button>
        </form>
    )

    export default SearchBar
}