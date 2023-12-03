import styles from "./Error.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
library.add(fas, faCircleExclamation);
function Error({ font, isDark, message }) {
  return (
    <div
      className={`${styles.main} ${isDark && styles.dark} ${
        !isDark && styles.light
      } ${font === "seriff" ? "seriff" : "mono"}`}
    >
      <FontAwesomeIcon
        className={isDark ? "" : styles.iconLight}
        icon="fa-solid fa-circle-exclamation"
      />
      <p>{message}</p>
    </div>
  );
}

export default Error;
