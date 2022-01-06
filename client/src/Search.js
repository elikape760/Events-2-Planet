import { Input } from 'semantic-ui-react'

function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="searchbar">
            {/* <label htmlFor="search">Search Events:</label> */}
            <Input
                type="text"
                id="search"
                placeholder="Type an event to search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}
export default Search