import React from "react";
import styles from "./TalkSection.module.css";

export default function TalkSection() {
  return (
    <section className={styles.talkSection}>
      <div className="container text--center">
        <div className={styles.exampleWrapper}>
          <h3 className="hero__title">
            Watch the talk about React Native Aria
          </h3>
        </div>

        <iframe
          width="62%"
          height="420"
          className={styles.talkVideo}
          src="https://www.youtube.com/embed/aWVYjCyewZI"
          //   src="https://www.youtube.com/embed/339nm9QyHWc?start=5119"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
