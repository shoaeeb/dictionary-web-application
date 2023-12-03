import Logo from "./Logo";
import Font from "./Font";
import styles from "./NavBar.module.css";
import MoonIcon from "./MoonIcon";
import Switcher from "./Switcher";
function NavBar({ setFont, setIsDark, isDark, font }) {
  return (
    <nav
      className={`${styles.nav} ${isDark && styles.dark} ${
        !isDark && styles.light
      }`}
    >
      <Logo />
      <div className={styles.action}>
        <Font isDark={isDark} font={font} setFont={setFont} />
        <Switcher isDark={isDark} setIsDark={setIsDark} />
        <MoonIcon />
      </div>
    </nav>
  );
}

export default NavBar;
