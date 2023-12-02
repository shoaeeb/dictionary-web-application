import styles from "./Information.module.css";
function Information({ font }) {
  return (
    <div className={`${styles.main} ${font === "seriff" ? "seriff" : "mono"}`}>
      <h1 className={styles.mainHeading}>Keyboard</h1>
      <span className={styles.subHeading}>/"fan/</span>

      <h3>noun</h3>
      <p className={styles.meaning}>Meaning</p>
      <ul className={styles.listMeaning}>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          veniam accusamus nam aliquam quam culpa deleniti soluta,
          exercitationem ut debitis?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          veniam accusamus nam aliquam quam culpa deleniti soluta,
          exercitationem ut debitis?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          veniam accusamus nam aliquam quam culpa deleniti soluta,
          exercitationem ut debitis?
        </li>
      </ul>
      <h4>Synonyms</h4>
      <span className={styles.synonyms}>electronic keyboard</span>
      <h3>Verb</h3>

      <p className={styles.meaning}>Meaning</p>
      <ul className={styles.listMeaning}>
        <li>
          To type on a computer
          <span>"Keyboarding is the part of this job i hate the most"</span>
        </li>
      </ul>

      <p className={styles.paraLink}>
        source{" "}
        <a className={styles.link} href="https://www.google.com">
          wwww.gogle.com
        </a>
      </p>
    </div>
  );
}

export default Information;
