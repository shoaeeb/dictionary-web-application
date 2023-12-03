import styles from "./SearchBar.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
library.add(fas, faMagnifyingGlass);
function SearchBar({ status, isDark, font, search, setSearch }) {
  const inputEle = useRef(null);
  const btnEle = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(inputEle.current.value);
      }}
      className={styles.form}
    >
      <input
        value={search}
        ref={inputEle}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        disabled={status === "loading"}
        placeholder="Search any word here...."
        className={`${font === "seriff" ? "seriff" : "mono"} ${
          isDark ? styles.searchBackgroundDark : styles.searchBackgroundLight
        }`}
      />
      <FontAwesomeIcon
        ref={btnEle}
        className={styles.icon}
        onClick={() => setSearch(inputEle.current.value)}
        style={{ color: isDark ? "grey" : "white" }}
        icon="fa-solid fa-magnifying-glass"
      />
    </form>
  );
}

export default SearchBar;
