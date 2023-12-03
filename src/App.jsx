import "./index.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Information from "./components/Information";
import Error from "./components/Error";
import Loader from "./components/Loader";
import useFetchWord from "./hooks/useFetchWord";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [font, setFont] = useState("seriff");
  const [search, setSearch] = useState("");
  const { status, message, data } = useFetchWord(search);
  return (
    <>
      <NavBar
        setIsDark={setIsDark}
        setFont={setFont}
        isDark={isDark}
        font={font}
      />
      <SearchBar
        status={false}
        isDark={isDark}
        font={font}
        search={search}
        setSearch={setSearch}
      />
      {status === "recieved" && (
        <Information data={data} isDark={isDark} font={font} />
      )}{" "}
      {status === "error" && <Error isDark={isDark} message={message} />}
      {status === "loading" && (
        <Loader isDark={isDark} font={font} message="Loading...Please Wait" />
      )}
    </>
  );
}

export default App;
