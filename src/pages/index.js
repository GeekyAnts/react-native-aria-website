import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Head from "@docusaurus/Head";

const SVGs = {
  Accessible: (
    <svg
      width="102px"
      height="102px"
      viewBox="0 0 102 102"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Accessibility</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="0.5"
      >
        <g
          id="Landing-page-ReactNative-Aria-Edit1"
          transform="translate(-176.000000, -962.000000)"
          className="feature-icons"
          fill-rule="nonzero"
        >
          <g id="4" transform="translate(139.000000, 963.000000)">
            <g id="accessibility" transform="translate(38.000000, 0.000000)">
              <path
                d="M50,100 C77.6142375,100 100,77.6142375 100,50 C100,22.3857625 77.6142375,0 50,0 C22.3857625,0 0,22.3857625 0,50 C0.031490257,77.6011832 22.3988168,99.9685098 50,100 Z M50,3.57142857 C75.641792,3.57142857 96.4285714,24.358208 96.4285714,50 C96.4285714,75.641792 75.641792,96.4285714 50,96.4285714 C24.358208,96.4285714 3.57142857,75.641792 3.57142857,50 C3.60095007,24.3704463 24.3704462,3.60095007 50,3.57142857 Z"
                id="Shape"
                className="feature-icons--stroke"
                stroke-width="2"
              ></path>
              <path
                d="M50.0084263,21 C54.6431608,21 58.4003555,24.7571947 58.4003555,29.3919292 C58.4003555,34.0266637 54.6431608,37.7838583 50.0084263,37.7838583 C45.3736918,37.7838583 41.6164971,34.0266637 41.6164971,29.3919292 C41.621123,24.7591121 45.3756092,21.0046259 50.0084263,21 Z M30.52936,39.1937024 L45.2404119,40.5140326 C45.7392655,40.5587896 46.2395176,40.5811681 46.7411685,40.5811681 L53.275684,40.5811681 C53.7764025,40.5811681 54.2766547,40.5587896 54.7764407,40.5140326 L69.4623168,39.1951011 L69.4846952,39.1951011 C71.7954966,39.0189812 73.8115445,40.7494825 73.9876646,43.0602838 C74.1637844,45.3710851 72.4332832,47.3871333 70.1224818,47.5632531 L58.2716792,48.6388187 C57.5514416,48.7039039 56.9995844,49.3073082 56.9989033,50.0304803 L56.9989033,53.2473865 C56.998567,53.9471411 57.129508,54.6407483 57.384932,55.2922199 L64.1390363,72.4956747 C65.0111262,74.6031595 64.0400605,77.0213094 61.9526094,77.9403202 C59.8651584,78.859331 57.4258932,77.9425963 56.4604212,75.8762235 L49.9846491,60.1455523 L43.5746139,75.8272706 C42.983731,77.2229848 41.6860833,78.1915628 40.1799542,78.3610805 C38.6738252,78.530598 37.1933402,77.874704 36.3069904,76.645255 C35.4206405,75.4158061 35.2662075,73.8039179 35.902992,72.4285393 L42.6333192,55.2866253 C42.8872853,54.635845 43.0168066,53.9431669 43.015152,53.2445892 L43.015152,50.027683 C43.0144708,49.3045109 42.4626136,48.7011066 41.742376,48.6360214 L29.8677963,47.5604558 C27.5573811,47.3789288 25.8315764,45.3588104 26.0131036,43.0483952 C26.1946307,40.7379801 28.2147489,39.0121754 30.525164,39.1937024 L30.52936,39.1937024 Z"
                id="Shape"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  Composable: (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Composable</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="0.5"
      >
        <g
          id="Landing-page-ReactNative-Aria-Edit1"
          transform="translate(-478.000000, -958.000000)"
          className="feature-icons"
          fill-rule="nonzero"
        >
          <g id="4-copy-4" transform="translate(440.000000, 958.000000)">
            <g id="compose" transform="translate(38.000000, 0.000000)">
              <path
                d="M31.4506823,68.3883041 L54.9766082,62.5091618 L99.6923977,17.7996101 L82.0393762,0.146588694 L37.3298246,44.8654971 L31.4506823,68.3883041 Z M82.0393762,8.9668616 L90.8721248,17.7996101 L86.4619883,22.2003899 L77.6385965,13.380117 L82.0393762,8.9668616 Z M73.22846,17.7996101 L82.0393762,26.6105263 L53.3672515,55.2826511 L44.5469786,46.4592593 L73.22846,17.7996101 Z M41.8366472,52.5598441 L47.2791423,58.0023392 L40.0214425,59.814425 L41.8366472,52.5598441 Z"
                id="Shape"
              ></path>
              <path
                d="M49.9146199,93.5890838 C25.7992203,93.5444444 6.28615984,73.9586745 6.33099415,49.8434698 C6.37582846,25.7280702 25.9614035,6.21520468 50.0766082,6.25984405 C53.9569201,6.26705653 57.8189084,6.791423 61.5604288,7.81910331 L63.2196881,1.81520468 C36.6549708,-5.52534113 9.16920078,10.0588694 1.82846004,36.6235867 C-5.5122807,63.1883041 10.0719298,90.674269 36.6368421,98.0150097 C63.2017544,105.35575 90.6875244,89.77154 98.0282651,63.2066277 C98.0551657,63.1093567 98.0816764,63.0120858 98.1079922,62.9146199 L92.0853801,61.2959064 C86.9263158,80.3432749 69.6481481,93.5744639 49.9146199,93.5890838 Z"
                id="Path"
              ></path>
              <path
                d="M93.5793372,49.9243665 C93.5793372,51.8192982 93.4573099,53.7120858 93.214425,55.591423 L99.4023392,56.3898635 C99.6773879,54.245614 99.8159844,52.0861598 99.817154,49.9243665 L99.817154,49.7746589 L93.5793372,49.9243665 Z"
                id="Path"
              ></path>
              <path
                d="M93.1769981,43.9734893 L99.3617934,43.1345029 C99.0606238,40.9354776 98.6136452,38.7588694 98.0237817,36.6191033 L92.0105263,38.2783626 C92.5270955,40.1483431 92.9167641,42.0510721 93.1769981,43.9734893 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  Consistent: (
    <svg
      width="102px"
      height="102px"
      viewBox="0 0 102 102"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Consistent</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="0.5"
      >
        <g
          id="Landing-page-ReactNative-Aria-Edit1"
          transform="translate(-800.000000, -953.000000)"
          className="feature-icons--stroke"
        >
          <g transform="translate(741.000000, 954.000000)">
            <g transform="translate(60.000000, 0.000000)">
              <path
                d="M50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 C31.8412294,100 15.9433612,90.3199263 7.18514783,75.8385314 L10.7694026,75.8380052 C19.1714751,88.5694003 33.6047404,96.969697 50,96.969697 C75.9406473,96.969697 96.969697,75.9406473 96.969697,50 C96.969697,24.0593527 75.9406473,3.03030303 50,3.03030303 C24.0593527,3.03030303 3.03030303,24.0593527 3.03030303,50 C3.03030303,55.3611912 3.92851867,60.5125928 5.58267194,65.311927 L2.38813684,65.3119987 C0.837425448,60.48635 0,55.3409706 0,50 C0,22.3857625 22.3857625,0 50,0 Z"
                id="Combined-Shape"
                stroke-width="2"
                className="feature-icons"
                fill-rule="nonzero"
              ></path>
              <g
                id="Group"
                transform="translate(20.289855, 24.637681)"
                stroke-width="2"
              >
                <rect
                  id="Rectangle-Copy"
                  x="8.69565217"
                  y="0"
                  width="52.173913"
                  height="44.9275362"
                  rx="4"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#E3E2EE"
                  x="0"
                  y="13.0434783"
                  width="30.4347826"
                  height="39.1304348"
                  rx="4"
                ></rect>
              </g>
              <circle
                id="Oval"
                fill="#4B3AB1"
                cx="6.52173913"
                cy="70.2898551"
                r="2.17391304"
              ></circle>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  Customisable: (
    <svg
      width="102px"
      height="102px"
      viewBox="0 0 106 106"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Customisable</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="0.5"
      >
        <g transform="translate(-1140.000000, -960.000000)">
          <g id="Group-16" transform="translate(1087.000000, 963.000000)">
            <g id="Group-18" transform="translate(56.000000, 0.000000)">
              <g
                id="mixer"
                transform="translate(21.000000, 28.000000)"
                className="feature-icons"
                fill-rule="nonzero"
              >
                <path
                  d="M7.67292788,29.2439275 C7.00414424,29.2439275 6.46194833,29.7741048 6.46194833,30.4284165 L6.46194833,41.7214924 C6.46194833,43.5599773 8.23562971,45 10.5,45 C12.7643703,45 14.5380517,43.5599773 14.5380517,41.7214924 L14.5380517,18.5070876 C18.136437,18.3030397 21,15.3876174 21,11.8319394 C21,8.27626144 18.136437,5.36099715 14.5380517,5.15679125 L14.5380517,3.26476751 C14.5380517,1.43402133 12.7643703,0 10.5,0 C8.23562971,0 6.46194833,1.43402133 6.46194833,3.26476751 L6.46194833,5.15679125 C2.86356297,5.36083921 0,8.27626144 0,11.8319394 C0,15.3876174 2.86356297,18.3028817 6.46194833,18.5070876 L6.46194833,24.7796675 C6.46194833,25.4339792 7.00414424,25.9641565 7.67292788,25.9641565 C8.34171152,25.9641565 8.88390743,25.4339792 8.88390743,24.7796675 L8.88390743,18.5195642 L12.116254,18.5195642 L12.116254,41.7214924 C12.116254,42.1509092 11.4250269,42.631022 10.5001615,42.631022 C9.57529602,42.631022 8.88406889,42.1509092 8.88406889,41.7214924 L8.88406889,30.4284165 C8.88390743,29.7741048 8.34171152,29.2439275 7.67292788,29.2439275 Z M10.5,2.36897797 C11.4101722,2.36897797 12.1160926,2.85051223 12.1160926,3.26476751 L12.1160926,5.14431463 L8.88390743,5.14431463 L8.88390743,3.26476751 C8.88390743,2.85051223 9.58982777,2.36897797 10.5,2.36897797 Z M2.4219591,11.8319394 C2.4219591,9.45064278 4.41523143,7.5132926 6.86528525,7.5132926 L14.1348762,7.5132926 C16.58493,7.5132926 18.5782024,9.45064278 18.5782024,11.8319394 C18.5782024,14.2132361 16.58493,16.1505863 14.1348762,16.1505863 C13.4250807,16.1060495 7.73121636,16.1752236 6.86528525,16.1505863 C4.41506997,16.1504283 2.4219591,14.2132361 2.4219591,11.8319394 Z"
                  id="Shape"
                ></path>
                <path
                  d="M40,33.0239631 C40,29.4646973 37.1277401,26.546816 33.5216322,26.350754 L33.5392316,3.27732817 C33.5392316,1.43952389 31.7655639,0 29.501211,0 C27.2370196,0 25.4631903,1.43952389 25.4631903,3.27811747 L25.4780449,26.350754 C21.8720985,26.5469738 19,29.4648551 19,33.0239631 C19,36.5816504 21.8696765,39.4984267 25.4733625,39.6968565 L25.4631903,41.7395628 C25.4631903,43.5678955 27.2368581,45 29.501211,45 C31.7655639,45 33.5392316,43.5678955 33.5392316,41.7327749 L33.5271219,39.6966986 C37.1306464,39.4979531 40,36.5814925 40,33.0239631 Z M29.501211,2.36789762 C30.4262308,2.36789762 31.1172911,2.8479494 31.1172911,3.27638101 L31.0996917,26.339546 L27.8999854,26.339546 L27.8851308,3.27732817 C27.8851308,2.8479494 28.5763526,2.36789762 29.501211,2.36789762 Z M29.501211,42.6322602 C28.5910457,42.6322602 27.8851308,42.1525242 27.8851308,41.7454036 L27.895303,39.7085381 L31.1051814,39.7085381 L31.1172911,41.7397207 C31.1174526,42.1525242 30.4113762,42.6322602 29.501211,42.6322602 L29.501211,42.6322602 Z M33.1347675,37.3406405 L25.865071,37.3406405 C23.4151975,37.3406405 21.4219405,35.4041738 21.4219405,33.0239631 C21.4219405,30.6437524 23.4151975,28.7072858 25.865071,28.7072858 L33.1347675,28.7072858 C35.5848025,28.7072858 37.5780595,30.6437524 37.5780595,33.0239631 C37.5780595,35.4041738 35.5848025,37.3406405 33.1347675,37.3406405 L33.1347675,37.3406405 Z"
                  id="Shape"
                ></path>
                <path
                  d="M51.5380517,13.2815742 L51.5380517,3.28458864 C51.5380517,1.44276471 49.7643703,0 47.5,0 C45.2356297,0 43.4619483,1.44276471 43.4619483,3.28821645 L43.4926265,13.279366 C39.8797094,13.4683276 37,16.3871383 37,19.9482292 C37,23.5097933 39.8805167,26.4289194 43.4939182,26.6172502 L43.4619483,41.7385978 C43.4619483,43.5674878 45.2356297,45 47.5,45 C49.7643703,45 51.5380517,43.5674878 51.5380517,41.7385978 L51.5380517,26.6148842 C55.136437,26.4110958 58,23.4993831 58,19.9482292 C58,16.3970753 55.136437,13.4853626 51.5380517,13.2815742 Z M47.4998385,2.36580604 C48.4248654,2.36580604 49.1159311,2.85082861 49.1159311,3.28443091 L49.1159311,13.2689558 L45.9142626,13.2689558 L45.8835845,3.28443091 C45.883746,2.85098634 46.5749731,2.36580604 47.4998385,2.36580604 L47.4998385,2.36580604 Z M47.4998385,42.6337208 C46.5896663,42.6337208 45.883746,42.152326 45.883746,41.740806 L45.9157158,26.6271872 L49.1160926,26.6271872 L49.1160926,41.7384401 C49.1160926,42.1524837 48.4101722,42.6337208 47.4998385,42.6337208 L47.4998385,42.6337208 Z M51.1348762,24.2612234 L43.8651238,24.2612234 C41.41507,24.2612234 39.4217976,22.3263383 39.4217976,19.9480715 C39.4217976,17.5698047 41.41507,15.6349195 43.8651238,15.6349195 L51.1348762,15.6349195 C53.5847686,15.6349195 55.5780409,17.5698047 55.5780409,19.9480715 C55.5780409,22.3263383 53.5847686,24.2612234 51.1348762,24.2612234 Z"
                  id="Shape"
                ></path>
              </g>
              <circle
                id="Oval"
                className="feature-icons--stroke"
                stroke-width="5"
                cx="50"
                cy="50"
                r="50"
              ></circle>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
};

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
          {SVGs[title]}
          {/* <img className={styles.featureImage} src={imgUrl} alt={title} /> */}
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
      description="React Hooks to build accessible React Native design systems"
    >
      <Head>
        <meta property="og:title" content="React Native ARIA" />
        <meta
          property="og:description"
          content="React Hooks to build accessible React Native design systems"
        />
        <meta
          property="og:image"
          content="https://react-native-aria.geekyants.com/img/banner.png"
        />
        <meta
          name="keywords"
          content="React, TypeScript, Open Source, OSS, ARIA, React Native, Accessible, Aria, WAI-ARIA"
        />
        <meta
          property="og:url"
          content="https://react-native-aria.geekyants.com"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="React Native ARIA" />
        <meta name="twitter:image:alt" content="React Native ARIA" />
        <meta
          name="twitter:image"
          content="https://react-native-aria.geekyants.com/img/banner.png"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HHHEDRF361"
        ></script>
        <script>
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-HHHEDRF361');
          `}
        </script>
      </Head>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <h1 className="hero__title hero__title--left">
                React Hooks to build accessible React Native design systems
              </h1>
              <p className="hero__subtitle hero__subtitle--left">
                {/* React Native ARIA handles behaviour, accessibility and
                interactions so you can implement custom components and design
                systems for Android, iOS and Web.
                <br /> */}
                React Native Aria brings the support of{" "}
                <a
                  href="https://react-spectrum.adobe.com/react-aria/"
                  target="__blank"
                  className="text-white hover-text-white text-underline"
                >
                  React Aria
                </a>{" "}
                to React Native (Web, Android & iOS)
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
            <div className="col col--6 hero-image">
              <img
                style={{ height: "20rem" }}
                src="img/logo-large.png"
                alt="React Native Aria logo"
              ></img>
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
              <h3 className="hero__title">Toggle Button Example</h3>
              <div className={styles.exampleDescription}>
                <p>
                  Provides the behavior and accessibility implementations for a
                  toggle button component. ToggleButtons allow users to toggle a
                  selection on or off, for example switching between two states
                  or modes.
                </p>
              </div>
            </div>
            <iframe
              src="https://snack.expo.io/embedded/@nishanbende/usetogglebutton?preview=true&platform=web&theme=dark"
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
