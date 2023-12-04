import styles from "./SearchBar.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import useKey from "../hooks/useKey";
import { useState } from "react";
library.add(fas, faMagnifyingGlass);
function SearchBar({ status, isDark, font, search, setSearch }) {
  const [query, setQuery] = useState("");
  const inputEle = useRef(null);
  const btnEle = useRef(null);

  function onSetQuery(e) {
    setQuery(e.target.value);
  }
  function condition() {
    return document.activeElement === inputEle.current;
  }

  function callBack() {
    setQuery("");
    inputEle.current.focus();
  }

  useKey("Enter", condition, callBack);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(inputEle.current.value);
      }}
      className={styles.form}
    >
      <input
        value={query}
        ref={inputEle}
        onChange={(e) => onSetQuery(e)}
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
