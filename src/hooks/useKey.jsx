import { useEffect } from "react";

function useKey(key, condition, callBack) {
  useEffect(
    function (e) {
      function toCall(e) {
        if (condition?.()) return;
        if (e.code.toLowerCase() === key.toLowerCase()) callBack();
      }
      document.addEventListener("keydown", toCall);
      return () => document.removeEventListener("keydown", toCall);
    },
    [key, callBack, condition]
  );
}

export default useKey;
