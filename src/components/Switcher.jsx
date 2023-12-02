import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import styles from "./Switcher.module.css";
library.add(fas, faToggleOn, faToggleOff);
function Switcher({ isDark, setIsDark }) {
  return (
    <>
      {isDark && (
        <FontAwesomeIcon
          onClick={() => setIsDark(false)}
          className={styles.icon}
          icon="fa-solid fa-toggle-on"
        />
      )}
      {!isDark && (
        <FontAwesomeIcon
          onClick={() => setIsDark(true)}
          className={styles.icon}
          icon="fa-solid fa-toggle-off"
        />
      )}
    </>
  );
}

export default Switcher;
