import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Head from "@docusaurus/Head";

const features = [
  {
    title: "Accessible",
    imageUrl: "img/accessibility.svg",
    description: <>Amplify user adoption and experience for your apps</>,
  },
  {
    title: "Composable",
    imageUrl: "img/compose.svg",
    description: <>Combine components for your specific app needs</>,
  },
  {
    title: "Consistent",
    imageUrl: "img/consistent.svg",
    description: <>Consistent across Web, Android and iOS</>,
  },
  {
    title: "Customisable",
    imageUrl: "img/customisable.svg",
    description: <>Design implementations are in your hands</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--3", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="React Native ARIA helps you build accessible and rich apps with React Native."
    >
      <Head>
        <meta property="og:title" content="React Native ARIA" />
        <meta
          property="og:description"
          content="React Native ARIA helps you build accessible and rich apps with React Native."
        />
        <meta
          name="keywords"
          content="React, TypeScript, Open Source, OSS, ARIA, React Native, Accessible, Aria, WAI-ARIA"
        />
        <meta
          property="og:url"
          content="[https://geekyants.github.io/react-native-aria/](https://geekyants.github.io/react-native-aria/)"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="React Native ARIA" />
        <meta name="twitter:image:alt" content="React Native ARIA" />
      </Head>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <h1 className="hero__title hero__title--left">
                Build Accessible and Rich Apps with React Native
              </h1>
              <p className="hero__subtitle hero__subtitle--left">
                React Native ARIA handles behaviour, accessibility and
                interactions so you can implement custom components and design
                systems for Android, iOS and Web
              </p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/")}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col col--6">
              <img src="img/header-image.png" alt="Different devices"></img>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.exampleSection}>
          <div className="container text--center">
            <div className={styles.exampleWrapper}>
              <h3 className="hero__title">Checkbox Example</h3>
              <div className={styles.exampleDescription}>
                <p>
                  Checkboxes allow users to select multiple items from a list of
                  individual items, or to mark one individual item as selected.
                  React Native ARIA provides the behaviour and accessibility
                  implementations for a Checkbox component.
                </p>
              </div>
            </div>
            <iframe
              src="https://snack.expo.io/embedded/@nishanbende/usecheckbox?preview=true&platform=web&theme=dark"
              height="600"
              width="100%"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
