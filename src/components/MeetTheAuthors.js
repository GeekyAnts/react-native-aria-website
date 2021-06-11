import React from "react";
// import clsx from "clsx";
import styles from "./MeetTheAuthors.module.css";

const AuthorList = [
  {
    name: "sanketsahu",
    gitUrl: "https://github.com/sanketsahu",
    image: "https://avatars.githubusercontent.com/u/1733433?v=4",
  },
  {
    name: "ilasahu",
    gitUrl: "https://github.com/ilasahu",
    image: "https://avatars.githubusercontent.com/u/19813508?v=4",
  },
  {
    name: "himanshu-satija",
    gitUrl: "https://github.com/himanshu-satija",
    image: "https://avatars.githubusercontent.com/u/15103616?v=4",
  },
  {
    name: "rohits-geekyants",
    gitUrl: "https://github.com/rohits-geekyants",
    image: "https://avatars.githubusercontent.com/u/67270892?v=4",
  },
  {
    name: "rajatk16",
    gitUrl: "https://github.com/rajatk16",
    image: "https://avatars.githubusercontent.com/u/23185733?v=4",
  },
  {
    name: "cyrus25",
    gitUrl: "https://github.com/cyrus25",
    image: "https://avatars.githubusercontent.com/u/38385549?v=4",
  },
  {
    name: "theankurkedia",
    gitUrl: "https://github.com/theankurkedia",
    image: "https://avatars.githubusercontent.com/u/15001759?v=4",
  },
  {
    name: "sankhadeeproy007",
    gitUrl: "https://github.com/sankhadeeproy007",
    image: "https://avatars.githubusercontent.com/u/10998047?v=4",
  },
];

function Author({ gitUrl, image }) {
  return (
    <a href={gitUrl} target="_blank">
      <img src={image} className={styles.authorImg} />
    </a>
  );
}

export default function MeetTheAuthors() {
  return (
    <section className={styles.authorSection}>
      <div className={styles.authorContainer} id={styles.authorContainer}>
        <div className={styles.authorHeader}>
          {/* <img
            src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/twitter_logo-300x300.png"
            alt="logo"
          /> */}
          <h3>Meet the Authors</h3>
        </div>
        <div className={styles.authorBody}>
          {AuthorList.map((props, idx) => (
            <Author key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
