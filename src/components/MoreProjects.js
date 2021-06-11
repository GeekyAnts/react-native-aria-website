import React from "react";
// import clsx from "clsx";
import styles from "./MoreProjects.module.css";

const Projects = [
  {
    projectName: "NativeBase",
    image: ".././static/img/Nativebaselogo.png",
    link:
      "https://nativebase.io/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
  {
    projectName: "Formst",
    image: ".././static/img/FormstLogo-dark.png",
    link:
      "https://formst.geekyants.com/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
  {
    projectName: "SyncState",
    image: ".././static/img/SyncStateLogoWithBackground.png",
    link:
      "https://syncstate.github.io/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
  {
    projectName: "React Pluggable",
    image: ".././static/img/react-pluggable.png",
    link:
      "https://react-pluggable.github.io/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
];
function Project({ link, image, projectName }) {
  return (
    <a href={link} target="_blank">
      <img src={image} className={styles.projectImg} />
      <h3>{projectName}</h3>
    </a>
  );
}

export default function MoreProjects() {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectContainer} id={styles.projectContainer}>
        <div className={styles.projectHeader}>
          {/* <img
            src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/twitter_logo-300x300.png"
            alt="logo"
          /> */}
          <h3>More Projects from GeekyAnts</h3>
        </div>
        <div className={styles.projectBody}>
          {Projects.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
