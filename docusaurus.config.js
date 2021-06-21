module.exports = {
  title: "React Native ARIA",
  tagline:
    "React Native ARIA handles behaviour, accessibility and interactions so you can implement custom components and design systems for Android, iOS and Web",
  url: "https://react-native-aria.geekyants.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "geekyants", // Usually your GitHub org/user name.
  projectName: "react-native-aria", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "React Native ARIA",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/GeekyAnts/react-native-aria",
          label: "GitHub",
          position: "right",
        },
        {
          href:
            "https://geekyants.com/?utm_source=Landing_Page&utm_medium=Hire_Us&utm_campaign=RN_ARIA",
          label: "Hire Us",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: "e2206a9dbfb5b7bba33d6dccec9acfe1",
      indexName: "ReactNativeAria",
      placeholder: "Search",
      algoliaOptions: {
        facetFilters: ["language:en"],
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",

              to: "https://twitter.com/geekyants",
            },
            {
              label: "Stack Overflow",

              to:
                "https://stackoverflow.com/questions/tagged/React-native-aria",
            },
            {
              label: "Discord",

              to: "https://discord.com/invite/jpxVeDFqxG",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/GeekyAnts/react-native-aria",
            },
            // {
            //   label: "Roadmap",
            //   href: "https://trello.com/b/8HcLFH3K/react-native-aria-roadmap",
            // },
            {
              label: "Contribution Guidelines",

              to:
                "https://github.com/GeekyAnts/react-native-aria/blob/main/CONTRIBUTING.md",
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Built with ❤️ at GeekyAnts ",
              href:
                "https://geekyants.com/?utm_source=Landing_Page&utm_medium=Made_with_love&utm_campaign=RN_ARIA",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ReactNativeAria `,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      // {
      //   docs: {
      //     sidebarPath: require.resolve("./sidebars.js"),
      //     // Please change this to your repo.
      //     editUrl:
      //       "https://github.com/geekyants/react-native-aria-website/tree/main/",
      //   },
      //   theme: {
      //     customCss: require.resolve("./src/css/custom.css"),
      //   },
      // },
      {
        docs: {
          // homePageId: "getting-started",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "./docs",
          sidebarPath: "./sidebars.js",
        },
        blog: {
          path: "blog",
        },
        theme: {
          customCss: "../src/css/custom.css",
        },
      },
    ],
  ],
};
