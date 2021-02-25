const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search items"
            name="s" 
        />
    </form>
);

export default SearchBar;