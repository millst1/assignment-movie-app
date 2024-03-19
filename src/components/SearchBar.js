import {useState} from "react"
import {generate} from "random-words";

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
        var randomWord = generate();
        setSearchQuery(randomWord);
        onSearch(searchQuery);
    }

    return (
        <form onSubmit={handleSubmit} className='d-flex align-items-center flex-column'>
            <input type="text" className="input-group-text" autoFocus="autofocus" value={searchQuery} onChange={handleOnChange} style={{ width: '36rem', margin: '8px'}}/>
            <div className='row'>
                <button type="submit" className="btn btn-primary" style={{ width: '8rem', margin: '8px'}}>Search</button>
                <button onClick={handleFeelingLucky} className="btn btn-secondary" style={{ width: '8rem', margin: '8px'}}>Surprise me</button>
            </div>
        </form>
    )
}

export default SearchBar