import styles from "./Font.module.css";
function Font({ isDark, font, setFont }) {
  return (
    <div
      className={`${styles.select} ${font === "seriff" ? "seriff" : "mono"}`}
    >
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        name="font"
        id="font"
        className={isDark ? styles.dark : styles.light}
      >
        <option value="mono">Mono</option>
        <option value="seriff">Seriff</option>
      </select>
    </div>
  );
}

export default Font;
