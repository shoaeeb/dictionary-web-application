import styles from "./Information.module.css";

import Audio from "./Audio";
function Information({ isDark, font, data }) {
  const { audio, meanings, sourceUrls, text, word } = data.at(0);
  return (
    <div
      className={`${styles.main} ${font === "seriff" ? "seriff" : "mono"} ${
        isDark && styles.mainDark
      } ${!isDark && styles.mainLight}`}
    >
      <h1 className={styles.mainHeading}>{word}</h1>
      <span className={styles.subHeading}>{text}</span>
      <Audio audio={audio} />

      <p className={styles.meaning}>Meaning</p>
      <ul className={styles.listMeaning}>
        {meanings.map((meaning) => {
          return (
            <li className={styles.list} key={meaning.partOfSpeech}>
              <h3>
                {meaning.partOfSpeech.split("").at(0).toUpperCase() +
                  "" +
                  meaning.partOfSpeech.split("").slice(1).join("")}
              </h3>
              <h5>Definition</h5>
              <p>{meaning.definition}</p>
              <h5>Synonyms</h5>
              <p>{meaning.synonyms}</p>
            </li>
          );
        })}
      </ul>
      {/* <h3>noun</h3>
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
      </ul> */}

      <p className={styles.paraLink}>
        Source-
        <a className={styles.link} href={sourceUrls}>
          source url
        </a>
      </p>
    </div>
  );
}

export default Information;
