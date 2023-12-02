import "./index.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Information from "./components/Information";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [font, setFont] = useState("seriff");
  const [search, setSearch] = useState("");
  return (
    <>
      <NavBar
        setIsDark={setIsDark}
        setFont={setFont}
        isDark={isDark}
        font={font}
      />
      <SearchBar
        isDark={isDark}
        font={font}
        search={search}
        setSearch={setSearch}
      />
      <Information font={font} />
    </>
  );
}

export default App;
