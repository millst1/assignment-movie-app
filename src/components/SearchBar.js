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

    const handleFeelingLucky = () => {
        var randomWord = "";
        setSearchQuery(randomWord);
        onSearch(searchQuery);
    }

    return (
        <form onSubmit={handleSubmit} class='d-flex align-items-center flex-column'>
            <input type="text" class="input-group-text" autofocus="autofocus" value={searchQuery} onChange={handleOnChange} style={{ width: '36rem', margin: '8px'}}/>
            <div class='row'>
                <button type="submit" class="btn btn-primary" style={{ width: '8rem', margin: '8px'}}>Search</button>
                <button onClick={handleFeelingLucky} class="btn btn-secondary" style={{ width: '8rem', margin: '8px'}}>Surprise me</button>
            </div>
        </form>
    )
}

export default SearchBar