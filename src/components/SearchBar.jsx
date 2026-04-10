import styles from "./SearchBar.module.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;