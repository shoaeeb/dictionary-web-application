import { useEffect } from "react";

function useKey(key, onCall) {
  useEffect(
    function (e) {
      function toCall() {
        if (e.code.toLowerCase() === key.toLowerCase()) onCall();
      }
      document.addEventListener("click", toCall);
      return () => document.removeEventListener("click", toCall);
    },
    [key, onCall]
  );
}

export default useKey;
