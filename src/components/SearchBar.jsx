function SearchBar({searchTerm, onSearchChange}) {
  return (
    <div>
        <input 
            type="text" 
            placeholder="Search Projects" 
            value={searchTerm} 
            onChange={onSearchChange}
        />
    </div>
  )
}

export default SearchBar;