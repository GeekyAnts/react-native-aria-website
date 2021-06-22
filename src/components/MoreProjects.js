import React from "react";
import clsx from "clsx";
import styles from "./MoreProjects.module.css";

const products = [
  {
    product: "NativeBase",
    image: "/img/Nativebaselogo.png",
    link:
      "https://nativebase.io/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
  {
    product: "Formst",
    image: "/img/FormstLogo-dark.png",
    link:
      "https://formst.geekyants.com/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
  {
    product: "SyncState",
    image: "/img/SyncStateLogoWithBackground.png",
    link:
      "https://syncstate.github.io/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
  {
    product: "React Pluggable",
    image: "/img/react-pluggable.png",
    link:
      "https://react-pluggable.github.io/?utm_source=RN_ARIA&utm_medium=Landing_Page&utm_campaign=RN_ARIA",
  },
];
// function Project({ link, image, projectName }) {
//   return (
//     <a href={link} target="_blank">
//       <img src={image} className={styles.projectImg} />
//       <h3>{projectName}</h3>
//     </a>
//   );
// }

export default function MoreProjects() {
  return (
    <section className={styles.products}>
      <div className="container">
        <h1 className="hero__title  text--center feature_section_padding">
          More from GeekyAnts
        </h1>
        <div className="row">
          {products.map((props, idx) => {
            return <Product key={idx} {...props} />;
          })}
        </div>
      </div>
    </section>
  );
}
// const products = [
//   {
//     product: "NativeBase",
//     link:
//       "https://nativebase.io/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=Formst",
//   },
//   {
//     product: "React Native Aria",
//     link:
//       "https://react-native-aria.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=Formst",
//   },
//   {
//     product: "SyncState",
//     link:
//       "https://syncstate.github.io/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=Formst",
//   },
//   {
//     product: "React Pluggable",
//     link:
//       "https://react-pluggable.github.io/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=Formst",
//   },
// ];
function Product({ product, link, image }) {
  return (
    <div className={clsx("col col--3")}>
      <a href={link} style={{ textDecorationLine: "none" }} target="_blank">
        <div
          className="text--center"
          style={{
            minHeight: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} alt="OSS logo" className={styles.projectImg} />
        </div>
        <div className={clsx("text--center padding-top--lg product")}>
          <h3>{product}</h3>
        </div>
      </a>
    </div>
  );
}
