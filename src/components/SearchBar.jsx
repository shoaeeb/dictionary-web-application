import styles from "./SearchBar.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(fas, faMagnifyingGlass);
function SearchBar({ isDark, font, search, setSearch }) {
  return (
    <form onSubmit={(e) => setSearch(e.target.value)} className={styles.form}>
      <input
        value={search}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search any word here...."
        className={`${font === "seriff" ? "seriff" : "mono"} ${
          isDark ? styles.searchBackgroundDark : styles.searchBackgroundLight
        }`}
      />
      <FontAwesomeIcon
        className={styles.icon}
        style={{ color: isDark ? "grey" : "white" }}
        icon="fa-solid fa-magnifying-glass"
      />
    </form>
  );
}

export default SearchBar;
