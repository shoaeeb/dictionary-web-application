import styles from "./Inactive.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
library.add(fas, faQuestion);
function Inactive({ font, isDark }) {
  return (
    <div
      className={`${styles.main} ${isDark && styles.dark} ${
        !isDark && styles.light
      } `}
    >
      <FontAwesomeIcon
        className={isDark ? "" : styles.iconLight}
        icon="fa-solid fa-question"
      />
      <p className={`${font === "seriff" ? "seriff" : "mono"}`}>Search any word to find the meaning</p>
    </div>
  );
}

export default Inactive;
