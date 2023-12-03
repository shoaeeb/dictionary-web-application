import styles from "./Loader.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faSpinner);
function Loader({ isDark, font, message }) {
  return (
    <div
      className={`${styles.main} ${isDark && styles.dark} ${
        font === "seriff" ? "seriff" : "mono"
      }`}
    >
      <FontAwesomeIcon
        className={`${styles.icon} ${isDark && styles.iconDark} ${
          !isDark && styles.iconLight
        }`}
        icon="fa-solid fa-spinner"
      />
      <p>{message}</p>
    </div>
  );
}

export default Loader;
