import { useReducer, useEffect } from "react";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

function formatData(obj) {
  let data = [];
  const { meanings, word, phonetics, sourceUrls } = obj;
  const { audio, text } = phonetics.at(1);
  console.log("inside");
  let meaningData = meanings.map((meaning) => {
    return {
      partOfSpeech: meaning.partOfSpeech || "No PartOfSpeech Found",
      synonyms: meaning.synonyms[0] || "No Synonyms found",
      definition: meaning.definitions[0]?.definition || "No Definition Found",
    };
  });
  const Fobj = {
    audio: audio,
    text: text,
    sourceUrls: sourceUrls,
    word: word,
    meanings: meaningData,
  };
  return [...data, Fobj];
}

const initialState = {
  status: "inactive", //loading,error,recieved,
  data: [],
  message: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loadingData":
      return { ...state, status: "loading" };
    case "dataRecieved":
      return {
        ...state,
        status: "recieved",
        message: "Everything fine",
        data: action.payload,
      };
    case "dataError":
      return { ...state, status: "error", message: action.payload };
    default:
      throw new Error("Something Went Wrong");
  }
}

function useFetchWord(word) {
  const [{ status, message, data }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(
    function () {
      async function fetchWord() {
        try {
          dispatch({ type: "loadingData" });
          const res = await fetch(`${BASE_URL}/${word}`);
          if (!res.ok)
            throw new Error("Cannot Find the Word You are Searching For");
          const data = await res.json();
          const formattedData = formatData(data.at(0));
          dispatch({ type: "dataRecieved", payload: formattedData });
          console.log(formattedData);
        } catch (error) {
          dispatch({
            type: "dataError",
            payload: "Cannot Find the Word You are Searching For",
          });
        }
      }
      if (word.length > 2) fetchWord();
      return () => (document.title = `Word || ${word}`);
    },
    [word]
  );

  return { status, message, data };
}

export default useFetchWord;
